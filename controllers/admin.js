let User = require('../models/user')
let jwt = require('jsonwebtoken')

function login(req, res, next) {
  User.findOne({username: req.body.username}, function(err, user) {
    if (err) return err
    if(!user) {
      // redirect to login page with fucking message
      res.send("User not found")
    }
    if(user.role != 'admin') {
      // redirect to login page with fucking message
      res.send("You are not fucking admin stupid")
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
  // register: register,
  login: login
}
