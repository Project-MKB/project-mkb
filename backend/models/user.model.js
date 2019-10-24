const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  firstName: {},
  lastName: {},
  email: {},
  preferences: {},
  profileImage: {},
  country: {},
  cuisine: {},

}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;