var instagram = require('instagram').createClient('fd5e6cde0ce24b2ea20c1ca6b04ee8d6', '5c9948f57d724f81918981edc00b1ddd');
var express = require('express');
var router = express.Router();
const userController = require('../controllers/user')
const user = require('../models/user');
const gallery = require('../models/gallery');
const soc = require('social-oauth-client');

/* GET users listing. */
// up to date uploaded gallery
router.get('/', function(req, res, next) {
  gallery.find({}, function(galleries){
    console.log(galleries);
    res.send(galleries)
  })
})



// homepage user, gallery detail for user

// homepage user, gallery detail for user
// router.get('/:id', function(req, res, next) {
//   // --- ___ ---
// })


var instagram = new soc.Instagram({
  "CLIENT_ID": "70786b4237984d71ba85ea9e398c639a",
  "CLIENT_SECRET": "448689c1bfa348b293d2f2156c39990d",
  "REDIRECT_URL": "http://localhost:3000/auth/instagram/callback"
});

router.get('/instagram', function (req, res) {
  var url = instagram.getAuthorizeUrl();  // default scope "public_content"
  // var url = instagram.getAuthorizeUrl(['follower_list', 'likes']);
  res.redirect(url);
});

// Instagram redirection url
router.get('/instagram/callback', function (req, res) {

  // delegate to social-auth-client
  instagram.callback(req, res).then(function(user) {

    // oauth token & user basic info will be shown
    res.send(user);
  }, function(err) {
    res.send(err);
  });
});

// URL to post image/gallery
router.post('/post', userController.upload, userController.updateUpload, function(req, res) {
  res.redirect('/')
})

router.get('/post', function (req, res, next) {
  res.render('upload')
})

// URL for view shit detail
router.get('/post/:id', function(req, res, next) {

})

module.exports = router;
