const jwt = require('jsonwebtoken')
const fileUpload = require('express-fileupload')

let User = require('../models/user')
let gallery = require('../models/gallery')
//
// try {
//   let decoded = jwt.verify(token, 'This Shit is a fucking token')
// } catch(err) {
//   console.log(err);
// }


// Edit Controller
// function edit(req, res, next) {
//   User.findOne({_id : req.}, function(err, user) {
//     if(err) console.log(err);
//     else {
//       email : req.body.email,
//       firstname: req.body.firstname,
//       lastname: req.body.lastname,
//       Dob: req.body.dob,
//       address: req.body.address
//       next()
//     }
//   })
// }

function upload(req, res, next) {
  if(!req.files) {res.send("Please upload your fucking file")}
  // input type is file with name in the end
  let file = req.files.imageUrl
  gallery.create({
    title: req.body.title,
    story: req.body.story,
    uploadAt: new Date,
    uploader: '58b8e3efa33bee069beae98a'
  }, function(err, galleries) {
    if(err) console.log(err);
    else {
      file.mv(`/Users/hacktiv8/Desktop/adams/project/InstaGallery/public/${galleries._id}.jpg`, function(error) {
        if(error) console.log("error from upload User", error);
        else {
          req.galleryID = galleries._id
          next()
        }
      })
    }
  })
}

function updateUpload(req, res, next) {
  gallery.update({_id: req.galleryID}, {imageUrl: '/uploadUser/' + req.galleryID}, function(err){
    if (err) {
      console.log(err);
    }else {
      next()
    }
  })
}

module.exports = {upload: upload, updateUpload: updateUpload}
