const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const Task = require("./models/Task");

let app = express();

// set up cors
let corsOptions = {
  origin: ["http://localhost:3000", "http://192.168.1.102:4501/"],
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: true
};

app.use(cors(corsOptions));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/task", (req, res) => {
  Task.find()
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.post("/task", (req, res) => {
  Task.create({task: req.body.task})
    .then(data => {
      console.log(data);
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

//app.listen(<port number>, <do something after successfully listening to port>)
app.listen(9000, function() {
  console.log("Example app listening on port 9000!");
});
