const mongoose = require('mongoose');
const db = require('../db/mongo');

let userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: String,
  firstname: {type: String, required: true},
  lastname: String,
  Dob: Date,
  address: String,
  facebookID: String,
  role: {type: String, default: 'user'},
  gallery: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Gallery' }]
}, {
  timestamps: true
})

let User = mongoose.model('User', userSchema)

module.exports = User
