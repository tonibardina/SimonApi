const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema

const collection = 'users'

var UserSchema = new Schema({
  level: Number,
  achievments: Number,
  points: Number,
  position: Number
}, { collection })

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Users', UserSchema)
