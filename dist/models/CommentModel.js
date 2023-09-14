"use strict";

var mongoose = require("mongoose");
var date = new Date();
var CommentSchema = new mongoose.Schema({
  idPost: {
    idMember: {
      type: String,
      required: false
    },
    idSubject: {
      type: String,
      required: false
    }
  },
  email: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  visible: {
    type: Boolean,
    required: true,
    "default": false
  }
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
}, {
  timestamps: true
});
var Comment = mongoose.model("comment", CommentSchema);
module.exports = Comment;