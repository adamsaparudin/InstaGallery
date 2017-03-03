const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('./models/user')
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy
const InstagramStrategy = require('passport-instagram').Strategy
var InstagramTokenStrategy = require('passport-instagram-token');


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

passport.use(new FacebookStrategy({
    clientID: '190233801464815',
    clientSecret: '2fed281ec8d8b6aba6a06b9d771a4c60',
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({
      facebookID: profile.id
  }, function(err, user) {
      if (err) {
          return cb(err);
      }
      if (!user) {
        User.create({
          username: profile.displayName,
          facebookID: profile.id
        }, function(err, user) {
          if(err) console.log(err);
          else {
            // render with register page, and add something like message or just put next
            console.log("register success");
            cb(null, user)
          }
        })
      } else {
          //found user. Return
          return cb(err, user);
      }
  });
  }
));

passport.use(new InstagramTokenStrategy({
    clientID: '70786b4237984d71ba85ea9e398c639a',
    clientSecret: '448689c1bfa348b293d2f2156c39990d',
    passReqToCallback: true
},
  function(req, accessToken, refreshToken, profile, next) {

    User.findOne({
      instagramID: profile.id
  }, function(err, user) {
      console.log(profile);
      if (err) {
          return cb(err);
      }
      // if (!user) {
      //   User.create({
      //     username: profile.displayName,
      //     facebookID: profile.id
      //   }, function(err, user) {
      //     if(err) console.log(err);
      //     else {
      //       // render with register page, and add something like message or just put next
      //       console.log("register success");
      //       res.redirect('/login')
      //     }
      //   })
      // } else {
      //     //found user. Return
      //     return cb(err, user);
      // }
  });
  }
));



  passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });

  passport.deserializeUser(function(id, cb) {
    User.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });
