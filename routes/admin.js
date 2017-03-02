var express = require('express');
var router = express.Router();
let adminController = require('../controllers/admin')

/* GET home page. */
// redirect to fucking login page if not authenticated yet.
// always pass fucking message when shit is coming. just to make sure things is okay
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.send("This shit is login page")
})

router.post('/login', adminController.login)

router.get('/user', function(req, res, next) {
  res.send("Look up and list all fucking user")
})

router.get('/user/:id', function(req, res, next) {
  res.send("See user details")
})

router.put('/', function(req, res, next) {
  res.send("Edit user detail")
})

router.delete('/user/:id', function(req, res, next) {
  res.send("delete a fucking user")
})

module.exports = router;
