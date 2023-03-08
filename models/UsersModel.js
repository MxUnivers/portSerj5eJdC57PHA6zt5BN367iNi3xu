const mongoose = require("mongoose");


let date = new Date();
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: false
        },
        firstname: {
            type: String,
            required: false,
        },
        lastname: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        code: {
            type: String,
            required: false,
        },
        telephone: {
            type: String,
            required: false,
            unique: true
        },
        coverPicture: {
            type: String,
            required: false
        },
        resetPass: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: false
        },
        access: {
            type: Boolean,
            default: true,
            required: false
        },
        token: {
            type: String,
            required: false
        },
        status: {
            type: Boolean,
            required: false,
            default: false
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
    }, { timestamps: true }
)

const User = mongoose.model("userapp", UserSchema);

module.exports = User;