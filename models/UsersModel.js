
const mongoose = require("mongoose");


var date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();
let hour = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

const UserSchema =new  mongoose.Schema(
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
            required: false,
            unique: true
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
        visible:{
            type:Boolean, 
            required:false,
            default:true
        }
        // dateNow: {
        //     type: String,
        //     required: false,
        //     default: `${day}-${month}-${year}`
        // },
        // hourNow: {
        //     type: String,
        //     required: false,
        //     default: `${hour}`
        // },
        // monthNow: {
        //     required: false,
        //     default: `${day}-${month}`
        // },
        // yearNow: {
        //     required: false,
        //     default: `${year}`
        // }
    }, { timestamps: true }
)

const User = mongoose.model("userapp", UserSchema);

module.exports = User;