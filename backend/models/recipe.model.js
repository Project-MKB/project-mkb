const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: Need to decide what are required
  title: { type: String, required: true },
  ingredients: [String],
  directions: [String],
  prepTime: Number,
  cookTime: Number,
  totalTime: Number,
  servingSize: Number,
  category: String,
  cuisine: String,
  footNote: [String],
  rating: Number,
  difficulty: Number,
  mainImage: String,
  images: [String],
  tags: [String],
  uid: String,
}, {
  timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;