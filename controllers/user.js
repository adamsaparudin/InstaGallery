const jwt = require('jsonwebtoken')

let User = require('../models/user')

try {
  let decoded = jwt.verify(token, 'This Shit is a fucking token')
} catch(err) {
  console.log(err);
}
