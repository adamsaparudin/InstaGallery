var express = require('express');
var router = express.Router();
const userController = require('../controllers/user')
const user = require('../models/user');
const gallery = require('../models/gallery');

/* GET users listing. */
// always pass fucking message when shit is coming. just to make sure things is okay

// up to date uploaded gallery
router.get('/', function(req, res, next) {
  gallery.find({}, function(galleries){
    res.send(galleries)
  })
})

// homepage user, gallery detail for user
router.get('/:id', function(req, res, next) {
  user.findById(req.params.id, function(err, userProfile){
    userProfile.password = null
    res.send(userProfile)
  })
});

// homepage user, gallery detail for user
// router.get('/:id', function(req, res, next) {
//   // --- ___ ---
// })

// profile detail (form for edit shit)
router.get('/:id/edit', function(req, res, next) {

})

// URL to post image/gallery
router.post('/post', userController.upload, function(req, res) {
  res.send("sukses upload from router")
})

// URL for view shit detail
router.get('/post/:id', function(req, res, next) {

})

module.exports = router;
