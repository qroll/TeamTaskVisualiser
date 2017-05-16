const express = require("express");
const router = express.Router();
const Promise = require("bluebird");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("./models/User");

// set up passport strategies
passport.use(
  "local-signup",
  new LocalStrategy((username, password, done) => {
    if (!username) {
      return done(null, false, { message: "No username provided" });
    }
    if (!password) {
      return done(null, false, { message: "No password provided" });
    }

    // verify username does not already exist in db
    User.findOne({ username }, "-password")
      .exec()
      .then(user => {
        if (user) {
          console.log("Username already taken");
          throw 'oh no!';
        }
        return User.create({ username, password });
      })
      .then(newUser => {
        return User.findOne(newUser._id, "-password").exec();
      })
      .then(newUser => {
        return done(null, newUser);
      })
      .catch(err => {
        return done(err);
      });
  })
);

passport.use(
  "local-login",
  new LocalStrategy((username, password, done) => {
    if (!username) {
      return done(null, false, { message: "No username provided" });
    }
    if (!password) {
      return done(null, false, { message: "No password provided" });
    }

    // retrieve account from db
    User.findOne({ username })
      .exec()
      .then(user => {
        // verify user exists
        if (!user) {
          return done(null, false, { message: "No user found" });
        }
        // verify password
        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Wrong password" });
          }
        });
      })
      .catch(err => {
        return done(err);
      });
  })
);

router.post("/signup", passport.authenticate("local-signup"), (req, res) => {
  res.sendStatus(200);
});

router.post("/login", passport.authenticate("local-login"), (req, res) => {
  res.sendStatus(200);
});

router.post("/logout", passport.authenticate("local-login"), (req, res) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
