var instagram = require('instagram').createClient('fd5e6cde0ce24b2ea20c1ca6b04ee8d6', '5c9948f57d724f81918981edc00b1ddd');
var express = require('express');
var router = express.Router();
const userController = require('../controllers/user')
const user = require('../models/user');
const gallery = require('../models/gallery');


/* GET users listing. */
// always pass fucking message when shit is coming. just to make sure things is okay

router.get('/post', function(req, res) {
  res.render('uploadshit')
})


// up to date uploaded gallery
router.get('/', function(req, res, next) {
  gallery.find({}, function(galleries){
    res.send(galleries)
  })
})



// homepage user, gallery detail for user

// homepage user, gallery detail for user
// router.get('/:id', function(req, res, next) {
//   // --- ___ ---
// })

router.get('/instagram', function (req, res, next) {
  instagram.tags.tag('snow', function (tag, error) {
    if (error) {
      console.log(error);
      res.send("error cuy")
    } else {
      res.send(tag)
    }
  });
})

// URL to post image/gallery
router.post('/post', userController.upload, userController.updateUpload, function(req, res) {
  res.send("sukses upload from router")
})

// URL for view shit detail
router.get('/post/:id', function(req, res, next) {

})

module.exports = router;
