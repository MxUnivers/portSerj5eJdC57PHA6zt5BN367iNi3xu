"use strict";

var mongoose = require("mongoose");
var date = new Date();
var ProjectSchema = new mongoose.Schema({
  idComment: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  coverPicture: {
    type: String,
    required: false
  },
  content: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false,
    "default": "#"
  },
  media: {
    video: {
      type: String,
      required: false
    },
    audio: {
      type: String,
      required: false
    }
  },
  avis: {
    like: {
      type: Number,
      required: false,
      "default": 5
    },
    comments: {
      type: Number,
      required: false,
      "default": 5
    }
  },
  visible: {
    type: Boolean,
    required: true,
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
var Project = mongoose.model("project", ProjectSchema);
module.exports = Project;