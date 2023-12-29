"use strict";

var express = require("express");
var dotenv = require("dotenv");
var morgan = require("morgan");
var helmet = require("helmet");
var cors = require("cors");
var bodyParser = require("body-parser");
var functions = require('firebase-functions');
dotenv.config();
var UploadFile = require("./utils/FileUpload");
var userRoute = require("./routes/UserRoute");
var authroute = require("./routes/AuthUserRoute");
var projectroute = require("./routes/ProjectRoute");
var serviceroute = require("./routes/ServiceRoute");
var messageroute = require("./routes/MessageRoute");
var commentroute = require("./routes/CommentRoute");
var managerpageroute = require("./routes/ManagerPageRoute");
var visitorroute = require("./routes/VisitorRoute");

// connect Mongoose
var LanchMogoDb = require("./utils/ConnectMongoDb");
LanchMogoDb();
var app = express();

// middlwares de l'application 
app.use(cors({
  origin: "*"
}));
app.use(morgan('common'));
app.use(express.json({
  limit: "500mb"
}));
//app.use(express.urlencoded({ limit: "500mb" }));
app.use(bodyParser.json({
  limit: '1000mb'
}));
app.use(bodyParser.urlencoded({
  limit: '1000mb',
  extended: false
}));
app.use(helmet());
// access control
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST ');
  res.setHeader('Authorization', 'Bearer Sb5xnq9Gwe4mIlyucQJpi0lCoyn+faar5SRVzAFGDAqZbr6kRROW/');
  next();
});

// upload image
app.post("/uploadImage", function (req, res) {
  UploadFile(req.body.image).then(function (url) {
    return res.send(url);
  })["catch"](function (err) {
    return res.status(500).send(err);
  });
});
app.get("/", function (req, res) {
  res.send({
    article: "Api Portfolio en marche"
  });
  console.log("api vu ...");
});
var apiV1 = "/api/v1";

// 
app.use("".concat(apiV1, "/users"), userRoute);
app.use("".concat(apiV1, "/auth"), authroute);
app.use("".concat(apiV1, "/projects"), projectroute);
app.use("".concat(apiV1, "/services"), serviceroute);
app.use("".concat(apiV1, "/messages"), messageroute);
app.use("".concat(apiV1, "/comments"), commentroute);
app.use("".concat(apiV1, "/parameter_page"), managerpageroute);
// nombre de visite
app.use("".concat(apiV1), visitorroute);
app.listen(process.env.PORT, function () {
  console.log("serveur demaré " + process.env.PORT);
});

// exports.api = functions.https.onRequest(app);