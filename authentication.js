const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('./models/user')
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({passReqToCallback: true},
  function(req, username, password, cb) {
    User.findOne({username: username}, function(err, user) {
      if (err) { return cb(err) }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      user.password = null
      var token = jwt.sign({ user: user }, 'This Shit is a fucking tokens');
      user.token = token
      return cb(null, user);
    });
  }));

  passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });

  passport.deserializeUser(function(id, cb) {
    User.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });
