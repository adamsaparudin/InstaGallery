var express = require('express');
var router = express.Router();
let adminController = require('../controllers/admin')
const user = require('../models/user');

/* GET home page. */
// redirect to fucking login page if not authenticated yet.
// always pass fucking message when shit is coming. just to make sure things is okay
router.get('/', function(req, res, next) {
  res.send('Admin Page');
});

// router.get('/login', function(req, res, next) {
//   res.send("This shit is login page")
// })
//
// router.post('/login', adminController.login)
//
// router.get('/user', function(req, res, next) {
//   res.send("Look up and list all fucking user")
// })
//
// router.get('/user/:id', function(req, res, next) {
//   res.send("See user details")
// })
//
// router.put('/', function(req, res, next) {
//   res.send("Edit user detail")
// })
//
// router.delete('/user/:id', function(req, res, next) {
//   res.send("delete a fucking user")
// })

router.get('/user', function(req, res, next){
  user.find({}, function(err, user){
    if (err) {
      console.log(err);
    }else {
      res.send(user)
    }
  })
})

router.get('/user/:id', function(req, res, next){
  user.findById(req.params.id).then(function(user){
    //Halaman edit user
    res.send("user is deleted")
  })
})

//update user by id
router.post('/user/:id', function(req, res, next){
  user.findByIdAndUpdate(req.params.id, {$set: {
    password: req.body.password,
    email:req.body.email,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    Dob:req.body.dob,
    address:req.body.address
  }}, function(err, user){
    if (err) {
      console.log(err);
    }else {
      res.send('Success update')
    }
  })
})

router.post('/user/:id/delete', function(req, res, next){
  user.findById(req.params.id).then(function(user){
    res.send('admin edit user page')
  })
})

module.exports = router;
