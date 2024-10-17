const Reminder = require("../models/reminder")
exports.getReminders = async (req, res, next) => {
    try {
        const reminders = await Reminder.find();
        return res.status(200).json({
            success: true,
            count: reminders.length,
            data: reminders
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        })
    }
}
exports.deleteReminder = async (req, res, next) => {
    try {
        const reminder = await Reminder.findById(req.params.id);

        if (!reminder){
            return res.status(404).json({
                success: false,
                error: "No reminder found"
            })
        }
        await reminder.remove();

        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        })
    }
}
exports.addReminder = async (req, res, next) => {
    try {
        const reminder = await Reminder.create(req.body);
        return res.status(201).json({
            success: true,
            data: reminder
        })
    } catch (err) {
        if(err.name === "ValidationError"){
            const messages = Object.values(err.errors).map(val => val.message)
            return res.status(400).json({
                success: false,
                error: messages
            })
        }else{
            return res.status(500).json({
                success: false,
                error: "Server Error"
            })
        }
    }
}