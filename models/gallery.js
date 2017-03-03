const mongoose = require('mongoose');
let Schema = mongoose.Schema
const db = require('../db');

let gallerySchema = ({
  title: {type: String, required: true},
  imageUrl: String,
  story: String,
  uploadAt: Date,
  uploader: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

let Gallery = mongoose.model('Gallery', gallerySchema)

module.exports = Gallery
