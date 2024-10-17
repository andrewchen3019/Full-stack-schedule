const Schedule = require("../models/Schedule");
exports.getSchedule = async (req, res, next) => {
    try {
        const schedules  = await Schedule.find().lean();
        let schedule = await schedules[0];
        return res.status(200).json({
            success: true,
            data: schedule
        })
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            error: "Server Error"
        })
    }
}
