const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  ingredients: [String], // array
  directions: [String], // array
  prepTime: Number, // number
  cookTime: Number, // number
  totalTime: Number, // number
  servingSize: Number, // number
  category: String, // dessert, appet
  cuisine: String, // mexican, korean ..
  footNote: [String],
  rating: Number,
  difficulty: Number,
  mainImage: String,
  images: [String], // array
  tags: [String], // array
  uid: String,

}, {
  timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;