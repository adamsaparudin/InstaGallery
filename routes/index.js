var express = require('express');
var router = express.Router();
const passport = require('passport');
require('../authentication')
let userController = require('../controllers/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render("pages/register")
})

router.post('/register', userController.register)

router.get('/login', function(req, res, next) {
  res.render("pages/login")
})

router.get('/register/instagram', function(req, res, next) {

})

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/auth/instagram',
  passport.authenticate('instagram-token'),
  function(req, res){
    // The request will be redirected to Instagram for authentication, so this
    // function will not be called.
  });

// This shit is doing different things. from passport authentication. set jwt and check jwt, req.token and other shit is okay.
router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res, next) {
    console.log(req.user);
    console.log(req.session);
    // res.send("success login")
      res.send("user router")
});

module.exports = router;
