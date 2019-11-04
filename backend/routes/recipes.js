const router = require("express").Router();
const Recipe = require("../models/recipe.model");
const User = require("../models/user.model");
const fbAuth = require("../util/fbAuth");

// add recipe
router.post("/add", fbAuth, async (req, res) => {
  let newRecipe = req.body;

  newRecipe = new Recipe({
    ...newRecipe,
    rating: 0,
    uid: req.user.uid,
    totalTime: newRecipe.prepTime + newRecipe.cookTime
  });

  try {
    await newRecipe.save();
    return res.status(200).json(newRecipe);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
});

// get a particular recipe by id
router.get("/get/:id", fbAuth, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    return res.status(200).json(recipe);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
});

// get recommended recipes
router.get("/listRecs", fbAuth, async (req, res) => {
  // get user data
  const user = await User.findOne({ uid: req.user.uid });

  // search recipes from db that matches user preferences
  try {
    //================================================
    /* TODO: Brain storming! 
    please give me an idea to implement this efficiently
    to show recommended recipes to the user
    currently it's returning recipes that includes all of user preference tags
    */

    // get all recipes from the DB
    let allRecipes = await Recipe.find().select(
      " _id title cuisine tags rating"
    );
    // show all recipes that the tag includes all of user preferences
    recipes = calRecRecipes(user.preferences, allRecipes);
    //================================================

    return res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
});

// get list of recipes that matches userPref
const calRecRecipes = (userPref, allRecipes) => {
  return allRecipes.filter(recipe => {
    return userPref.every(p => recipe.tags.includes(p));
  });
};

module.exports = {
  router,
  calRecRecipes
};
