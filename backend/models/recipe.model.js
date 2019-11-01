const mongoose = require("mongoose")

const Schema = mongoose.Schema

const recipeSchema = new Schema(
  {
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
    uid: {}
  },
  {
    timestamps: true
  }
)

const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe
