const mongoose = require('mongoose');
const db = require('../db/mongo');

let userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: String,
  email: String,
  firstname: String,
  lastname: String,
  Dob: Date
  address: String
  gallery: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Gallery' }]
}, {
  timestamps: true
})

let User = mongoose.model('User', userSchema)

module.exports = User
