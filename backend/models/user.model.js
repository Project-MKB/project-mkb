const mongoose = require("mongoose");

const Schema = mongoose.Schema;

<<<<<<< HEAD
const userSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  displayName: String,
  preferences: [String],
  photoURL: String,
  country: String,
  cuisine: String,
}, {
  timestamps: true,
});
=======
const userSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    displayName: String,
    preferences: [String],
    photoURL: String,
    country: String,
    cuisine: String
  },
  {
    timestamps: true
  }
);
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405

const User = mongoose.model("User", userSchema);

module.exports = User;
