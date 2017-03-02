var express = require('express');
var router = express.Router();
let userController = require('../controllers/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.send("Register page")
})

router.post('/register', userController.register)

router.get('/login', function(req, res, next) {
  res.send("This shit is login page")
})

// This shit is doing different things. from passport authentication. set jwt and check jwt, req.token and other shit is okay.
app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    
    res.redirect('/');
  });

module.exports = router;
