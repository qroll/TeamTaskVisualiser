const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const MongoDBStore = require("connect-mongodb-session")(session);

const Task = require("./models/Task");
const User = require("./models/User");

let app = express();

// set up cors
let corsOptions = {
  origin: ["http://localhost:3000", "http://192.168.1.102:4501/"],
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: true
};

app.use(cors(corsOptions));
/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
*/

// set up body parser (to simplify request handling)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set up session middleware
var store = new MongoDBStore({
  uri: "mongodb://127.0.0.1:27017/fs-onboarding",
  collection: "Sessions"
});

let sessionOptions = {
  store: store,
  secret: "this is a really secret secret",
  resave: true,
  saveUninitialized: true,
  cookie: {}
};

app.use(session(sessionOptions)); // express session should be used before passport
app.use(passport.initialize());
app.use(passport.session());

// serialise user ID to the session
passport.serializeUser(function(user, done) {
  console.log('serializeUser()');
  console.log(user)
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  console.log('deserializeUser()');
  User.findById(id, (err, user) => {
    if (err) {
      return done(err);
    }
    return done(null, user);
  });
});

app.all('*', (req, res, next)=>{
  console.log(req.method + ' ' + req.url);
  next();
})

app.get('/', (req, res)=>{
  console.log('hellow im at the rrot')
  console.log(req.user)
})

app.use(require('./auth.js'));

app.get("/task", (req, res) => {
  console.log(req.user);
  Task.find({userId: req.user._id})
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
  console.log(req.user);
  Task.create(Object.assign({}, req.body.task, {userId: req.user._id}))
    .then(data => {
      console.log(data);
      res.json(data);
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
