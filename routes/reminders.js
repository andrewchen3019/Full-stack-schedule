const express= require("express");
const router = express.Router();
const { getReminders, addReminder, deleteReminder } = require("../controllers/reminders");

router.route("/").get(getReminders).post(addReminder);

router.route("/:id").delete(deleteReminder);

module.exports = router;