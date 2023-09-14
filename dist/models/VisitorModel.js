"use strict";

var mongoose = require("mongoose");
var date = new Date();
var MemberSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true
  }
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
}, {
  timestamps: true
});
var Visitor = mongoose.model("Visitor", MemberSchema);
module.exports = Visitor;