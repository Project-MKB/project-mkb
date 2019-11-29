const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    title: { type: String, required: true },
    ingredients: { type: [String], required: true },
    directions: { type: [String], required: true },
    prepTime: { type: Number, required: true },
    cookTime: { type: Number, required: true },
    totalTime: { type: Number, required: true },
    servingSize: { type: Number, required: true },
    category: { type: String, required: true },
    cuisine: { type: String, required: true },
    difficulty: { type: Number, required: true },
    mainImage: { type: String, required: true },
    tags: [String],
    uid: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
