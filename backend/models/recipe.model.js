const mongoose = require("mongoose");

const Schema = mongoose.Schema;

<<<<<<< HEAD
const recipeSchema = new Schema({
  id: {},
  title: { type: String, required: true },
  ingredients: {}, // array
  directions: {}, // array
  prepTime: {}, // number
  cookTime: {}, // number
  totalTime: {}, // number
  servingSize: {}, // number
  category: {}, // dessert, appet
  cuisine: {}, // mexican, korean ..
  footNote: {},
  rating: {},
  difficulty: {},
  mainImage: {}, // array
  images: {},
  tags: {}, // array
  uid: {},

}, {
  timestamps: true,
});
=======
const recipeSchema = new Schema(
  {
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
    uid: String
  },
  {
    timestamps: true
  }
);
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
