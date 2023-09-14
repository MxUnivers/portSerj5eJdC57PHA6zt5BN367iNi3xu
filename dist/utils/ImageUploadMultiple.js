"use strict";

var express = require('express');
var multer = require('multer');
var cloudinary = require('cloudinary').v2;
var router = express.Router();
var dotenv = require("dotenv");
dotenv.config();

// configure multer for handling multipart/form-data
var storage = multer.memoryStorage();
var upload = multer({
  storage: storage
});
var cloud_name = process.env.CLOUD_NAME;
var api_key = process.env.CLOUD_API_KEY;
var api_secret = process.env.CLOUD_API_SECRET;

// Configuration 
cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret
});
var opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto"
};
router.post('/upload', upload.array('images'), function (req, res) {
  var files = req.files;
  var urls = [];
  files.forEach(function (file) {
    cloudinary.uploader.upload_stream({
      resource_type: 'auto'
    }, function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      urls.push(result.secure_url);
      if (urls.length === files.length) {
        return res.status(200).send(urls);
      }
    }).end(file.buffer);
  });
});
module.exports = router;