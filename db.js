const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/insta_gallery_db'
mongoose.Promise = global.Promise
mongoose.connect(mongoDB)

let db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection errors'))

module.exports = db
