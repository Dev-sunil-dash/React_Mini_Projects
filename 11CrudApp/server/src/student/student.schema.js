const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    fullname: {
        type: String,
        required:true
    },
    roll: {
        type: Number,
        required:true
    },
    subject: {
        type: String,
        required:true
    }
}, {timestamps: true})

const model = mongoose.model("Student", schema)
module.exports = model