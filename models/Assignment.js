const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        required: true
    },
    due: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model("Assignment", AssignmentSchema)