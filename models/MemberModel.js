

const mongoose = require("mongoose");

let date = new Date();

const MemberSchema = new mongoose.Schema(
    {
        idSubject: {
            idComment: {
                type: String,
                required: false,
            },
            idProject: {
                type: String,
                required: false,
            },
        },
        countLike: {
            countComment: {
                type: Number,
                required: false,
                default: 0
            },
            project: {
                countComment: {
                    type: Number,
                    required: false,
                    default: 0
                }
            }
        },
        name: {
            type: String,
            required: true,
        },
        coverPicture: {
            type: String,
            required: false
        },
        code: {
            type: String,
            required: false,
            default: "225"
        },
        telephone: {
            type: String,
            required: false,
            unique: true
        },
        email: {
            type: String,
            unique: true,
            required: false
        },
        pays: {
            type: String,
            required: false
        },
        authenificate: {
            access: {
                type: Boolean,
                required: false,
                default: true
            },
            status: {
                type: String,
                required: false,
                default: false
            },
            token: {
                type: String,
                default: "",
                required: false
            }
        },
        password: {
            type: String,
            required: false
        },
        // time: {
        //     dateNow: {
        //         type: String,
        //         required: false,
        //         default: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
        //     },
        //     hourNow: {
        //         type: String,
        //         required: false,
        //         default: `${date.getHours()}:${date.getMinutes()}`
        //     },
        //     yearNow: {
        //         required: false,
        //         default: `${date.getMonth()}-${date.getFullYear()}`
        //     },
        //     yearNow: {
        //         required: false,
        //         default: `${date.getFullYear()}`
        //     }
        // }
    }
    ,
    {
        timestamps: true
    }
)

const Member = mongoose.model("member", MemberSchema);

module.exports = Member;