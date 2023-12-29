"use strict";

var dotenv = require("dotenv");
dotenv.config();
var cloudinary = require("cloudinary").v2;
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

// Upload
var uploadImage = function uploadImage(image) {
  //imgage = > base64
  return new Promise(function (resolve, reject) {
    cloudinary.uploader.upload(image, opts, function (error, result) {
      if (result && result.secure_url) {
        console.log(result.secure_url);
        return resolve(result.secure_url);
      }
      console.log(error.message);
      return reject({
        message: error.message
      });
    });
  });
};
module.exports = function (image) {
  //imgage = > base64
  return new Promise(function (resolve, reject) {
    cloudinary.uploader.upload(image, opts, function (error, result) {
      if (result && result.secure_url) {
        console.log(result.secure_url);
        return resolve(result.secure_url);
      }
      console.log(error.message);
      return reject({
        message: error.message
      });
    });
  });
};

// module.exports.uploadMultipleImages = (images) => {
//   return new Promise((resolve, reject) => {
//     const uploads = images.map((base) => uploadImage(base));
//     Promise.all(uploads)
//       .then((values) => resolve(values))
//       .catch((err) => reject(err));
//   });
// };