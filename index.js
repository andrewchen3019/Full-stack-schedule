const path = require("path");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
dotenv.config({ path: "./config/config.env"});
connectDB();
const events = require("./routes/events");
const reminders = require("./routes/reminders");
const schedule= require("./routes/schedule")
const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}
app.use("/api/v1/events", events)
app.use("/api/v1/reminders", reminders)
app.use("/api/v1/schedule", schedule)
app.use(bodyParser.json());
const publicVapidKey = "BPgzZ1XJ3SugFTIiefIFjdKVBNM9cEORZfP7pxvx_qnLK_wxNBoUxjQvRV0FPl4T16wk5gnhkSE4SxDcQpgjie8";
const privateVapidKey = "LrGFtVmfPUEKCXIHotmUaIdzztqACjWMJ5vaoXHTkSo";

webpush.setVapidDetails("mailto:test@test.com", publicVapidKey, privateVapidKey);

app.post("/subscribe", (req, res) => {
    const subscription = req.body;

    res.status(201).json({});

    const payload = JSON.stringify({ title: "Alert from Schedule"});

    webpush.sendNotification(subscription, payload).catch(err => console.error(err));
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")))
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))