let User = require('../models/user')
let jwt = require('jsonwebtoken')

function register(req, res, next) {
  User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname
  }, function(err, user) {
    if(err) console.log(err);
    else {
      // render with register page, and add something like message or just put next
      console.log("register success");
      res.redirect('/')
    }
  })
}
//Login facebook function loginFacebook, match it with facebookID

module.exports = {
  register: register
}
