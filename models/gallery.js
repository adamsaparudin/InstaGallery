const mongoose = require('mongoose');
const db = require('../db/mongo');

let gallerySchema = ({
  title: String,
  imageUrl: String,
  story: String,
  uploader: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, {
  timestamps: true
})

let Gallery = mongoose.model('Gallery', gallerySchema)

module.exports = Gallery
