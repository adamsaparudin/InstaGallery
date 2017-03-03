const jwt = require('jsonwebtoken')
const fileUpload = require('express-fileupload')

let User = require('../models/user')
let Gallery = require('../models/gallery')

try {
  let decoded = jwt.verify(token, 'This Shit is a fucking token')
} catch(err) {
  console.log(err);
}


// Edit Controller
function edit(req, res, next) {
  User.findOne({_id : req.}, function(err, user) {
    if(err) console.log(err);
    else {
      email : req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      Dob: req.body.dob,
      address: req.body.address
      next()
    }
  })
}

function upload(req, res, next) {
  if(!req.files) {res.send("Please upload your fucking file")}
  // input type is file with name in the end
  let file = req.files.sampleFiles
  Gallery.create({
    title: req.body.title,
    story: req.body.story,
    uploader: req.user._id
  }, function(err, gallery) {
    if(err) console.log(err);
    else {
      file.mv(`/public/uploadUser/${gallery._id}.jpg`, function(error) {
        if(error) console.log("error from upload User", error);
        else {
          Gallery.update({_id: gallery._id}, {imageUrl: `/public/uploadUser/${gallery._id}.jpg`})
          next()
        }
      })
    }
  })
}
