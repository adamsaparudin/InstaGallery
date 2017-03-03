const mongoose = require('mongoose');
const db = require('../db');

let userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String},
  email: String,
  firstname: {type: String},
  lastname: String,
  facebookID: String,
  instagramID: String,
  role: {type: String, default: 'user'},
  gallery: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Gallery' }]
}, {
  timestamps: true
})

let User = mongoose.model('User', userSchema)

module.exports = User
