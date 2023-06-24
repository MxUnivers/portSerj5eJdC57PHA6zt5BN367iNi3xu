

const mongoose = require("mongoose");

let date = new Date();

const MemberSchema = new mongoose.Schema(
    {
        count: {
            type: Number,
            required: true
        },
        // dateNow: {
        //     type: String,
        //     required: false,
        //     default: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
        // },
        // hourNow: {
        //     type: String,
        //     required: false,
        //     default: `${date.getHours()}:${date.getMinutes()}`
        // },
        // yearNow: {
        //     required: false,
        //     default: `${date.getMonth()}-${date.getFullYear()}`
        // },
        // yearNow: {
        //     required: false,
        //     default: `${date.getFullYear()}`
        // }
    },
    {
        timestamps: true
    }
)

const Visitor = mongoose.model("Visitor", MemberSchema);

module.exports = Visitor;