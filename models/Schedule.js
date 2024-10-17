const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
    0: {
        type: Object,
        required: true
    },
    1: {
        type: Object,
        required: true
    },
    2: {
        type: Object,
        required: true
    },
    3: {
        type: Object,
        required: true
    },
    4: {
        type: Object,
        required: true
    },
    5: {
        type: Object,
        required: true
    },
    6: {
        type: Object,
        required: true
    }
    
     
});

module.exports = mongoose.model("Schedule", ScheduleSchema)