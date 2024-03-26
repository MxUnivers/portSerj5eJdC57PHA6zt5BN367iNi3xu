
const express =  require("express");
const  dotenv = require("dotenv");
const  morgan = require("morgan");
const  helmet = require("helmet");
const  cors  =  require("cors");
const bodyParser = require("body-parser");
dotenv.config();



const UploadFile = require("./utils/FileUpload");

const  userRoute = require("./routes/UserRoute");
const  authroute =  require("./routes/AuthUserRoute");
const  projectroute =  require("./routes/ProjectRoute");
const  serviceroute =  require("./routes/ServiceRoute");
const  messageroute =  require("./routes/MessageRoute");
const  commentroute =  require("./routes/CommentRoute");
const  managerpageroute =  require("./routes/ManagerPageRoute");
const  visitorroute =  require("./routes/VisitorRoute");

// connect Mongoose
const LanchMogoDb = require("./utils/ConnectMongoDb");
LanchMogoDb();


const app =  express();

// middlwares de l'application 
app.use(cors({origin:"*"}));
app.use(morgan('common'));
app.use(express.json({ limit: "500mb" }));
//app.use(express.urlencoded({ limit: "500mb" }));
app.use(bodyParser.json({ limit: '1000mb' }));
app.use(bodyParser.urlencoded({
  limit: '1000mb',
  extended: false,
}));
app.use(helmet());
// access control
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST ');
  res.setHeader('Authorization','Bearer Sb5xnq9Gwe4mIlyucQJpi0lCoyn+faar5SRVzAFGDAqZbr6kRROW/');
  next();
})


// upload image
app.post("/uploadImage", (req, res) => {
  UploadFile(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});

app.get("/", (req, res) => {
  res.send({
    article:"Api Portfolio en marche",
  });
  console.log("api vu ...")
});

const apiV1 =`/api/v1`;

// 
app.use(`${apiV1}/users`,userRoute);
app.use(`${apiV1}/auth`,authroute);
app.use(`${apiV1}/projects`,projectroute);
app.use(`${apiV1}/services`,serviceroute);
app.use(`${apiV1}/messages`,messageroute);
app.use(`${apiV1}/comments`,commentroute);
app.use(`${apiV1}/parameter_page`,managerpageroute);
// nombre de visite
app.use(`${apiV1}`,visitorroute);

app.listen(process.env.PORT, ()=>{
  console.log("serveur demaré "+process.env.PORT);
})

// exports.api = functions.https.onRequest(app);