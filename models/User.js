const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    default: ''
  },
  refreshToken: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  }


})


module.exports = mongoose.model('Users', userSchema)