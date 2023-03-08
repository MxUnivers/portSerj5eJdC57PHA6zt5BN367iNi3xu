
const express =  require("express");
const  dotenv = require("dotenv");
const  morgan = require("morgan");
const  helmet = require("helmet");
const  cors  =  require("cors");
const bodyParser = require("body-parser");
dotenv.config();



const UploadFile = require("./utils/FileUpload");

const  temoignageRoute = require("./routes/TemoinRoute");
const  memberRoute = require("./routes/MemberRoute");
const  userRoute = require("./routes/UserRoute");
const  eventRoute =  require("./routes/activites/EventRoute");
const  donRoute =  require("./routes/activites/DonsRoute");
const  schoolRoute =  require("./routes/activites/SchoolRoute");
const  programRoute =  require("./routes/activites/ProgrammeRoute");
const  manager_pageRoute =  require("./routes/ManagerPageRoute");
const  messageroute =  require("./routes/MessageRoute");
const  authroute =  require("./routes/AuthUserRoute");

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
    article:"Api de plénitude en marche",
  });
  console.log("api vu ...")
});


// 
app.use("/api/v1/temoignages", temoignageRoute );
app.use("/api/v1/members", memberRoute );
app.use("/api/v1/message", messageroute );
app.use("/api/v1/users", userRoute );
app.use("/api/v1" ,authroute);
app.use("/api/v1/activites/event",  eventRoute );
app.use("/api/v1/activites/dons",  donRoute );
app.use("/api/v1/activites/school",  schoolRoute );
app.use("/api/v1/activites/programmes", programRoute );
app.use("/api/v1/manager-pages", manager_pageRoute );

app.listen(process.env.PORT, ()=>{
  console.log("serveur demaré "+process.env.PORT);
})
