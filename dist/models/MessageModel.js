"use strict";

var mongoose = require("mongoose");
var date = new Date();
var MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    "default": true
  },
  email: {
    type: String,
    required: false,
    "default": ""
  },
  telephone: {
    type: String,
    required: false,
    "default": ""
  },
  subject: {
    type: String,
    required: false,
    "default": ""
  },
  content: {
    type: String,
    required: false,
    "default": ""
  },
  access: {
    type: Boolean,
    "default": true
  },
  visible: {
    type: Boolean,
    "default": true
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
var Message = mongoose.model("contact_message", MessageSchema);
module.exports = Message;