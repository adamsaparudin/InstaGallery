let User = require('../models/user')
let jwt = require('jsonwebtoken')

function register(req, res, next) {
  User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    Dob: req.body.dob,
    address: req.body.address
  }, function(err, user) {
    if(err) return error
    else {
      // render with register page, and add something like message or just put next
      res.send("Success create User")
    }
  })
}

function login(req, res, next) {
  User.findOne({username: req.body.username}, function(err, user) {
    if (err) return err
    if(!user) {
      // redirect to login page with fucking message
      res.send("User not found")
    }
    if (user.password != req.body.password) {
      // redirect to login page with fucking message
      res.send("Wrong password")
    }
    if(user.password == req.body.password) {
      // send to profile page with and don't forget to set fucking tokens
      // var token = jwt.sign({ foo: 'bar' }, 'This Shit is a fucking tokens');
      res.send("Logged in")
    }
  })
}

//Login facebook function loginFacebook, match it with facebookID

module.exports = {
  register: register,
  login: login
}
