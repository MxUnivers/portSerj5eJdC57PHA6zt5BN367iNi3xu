

const  mongoose = require("mongoose");

let  date  = new Date();

const  CommentSchema =  new mongoose.Schema(
    {

        idPost:{
            idMember:{
                type:String,
                required:false
            },
            idSubject:{
                type:String,
                required:false
            }
        },
        email:{
            type:String,
            required:false
        },
        title:{
            type:String,
            required:false
        },
        content:{
            type:String,
            required:false
        },
        visible:{
            type:Boolean,
            required:false,
            default:false
        },
        // time:{
        //     dateNow:{
        //         type:String,
        //         required:false,
        //         default:`${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
        //     },
        //     hourNow:{
        //         type:String,
        //         required:false,
        //         default:`${date.getHours()}:${date.getMinutes()}`
        //     },
        //     yearNow:{
        //         required:false,
        //         default:`${date.getMonth()}-${date.getFullYear()}`
        //     },
        //     yearNow:{
        //         required:false,
        //         default:`${date.getFullYear()}`
        //     }
        // }
    }
    ,
    {
        timestamps:true
    }
)

const  Comment = mongoose.model("comment",CommentSchema);

module.exports = Comment ;