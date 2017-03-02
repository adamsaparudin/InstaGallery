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

router.post('/login', userController.login)

module.exports = router;
