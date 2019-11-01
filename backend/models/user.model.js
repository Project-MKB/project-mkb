const mongoose = require("mongoose")

const Schema = mongoose.Schema

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
)

const User = mongoose.model("User", userSchema)

module.exports = User
