const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
    no: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    zoom: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
    
     
});

module.exports = mongoose.model("Subject", SubjectSchema)