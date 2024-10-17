const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model("Reminder", ReminderSchema)