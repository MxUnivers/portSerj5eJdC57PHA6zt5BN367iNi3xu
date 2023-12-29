"use strict";

var mongoose = require("mongoose");
var date = new Date();
var ServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  coverPicture: {
    type: String,
    required: false
  },
  content: {
    type: String,
    required: false
  },
  visible: {
    type: Boolean,
    "default": true,
    required: false
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
var Service = mongoose.model("prestation", ServiceSchema);
module.exports = Service;