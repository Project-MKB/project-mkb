const router = require('express').Router();
const Recipe = require('../models/recipe.model');
const User = require('../models/user.model')
const fbAuth = require('../util/fbAuth')


// get recommended recipes
router.get('/', fbAuth, async (req, res) => {
  // get user data
  const user = await User.findOne({ uid: req.user.uid })

  // search recipes from db that matches user preferences
  try {

    //================================================
    /* Brain storming! 
    please give me an idea to implement this efficiently
    to show recommended recipes to the user */

    // get all recipes from the DB
    let recipes = await Recipe.find()
    // show all recipes that the tag includes all of user preferences
    recipes = recipes.filter(recipe => {
      return user.preferences.every(p => recipe.tags.includes(p))
    })
    //================================================



    return res.status(200).json(recipes)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error })
  }
});



// add recipe
router.post('/add', fbAuth, async (req, res) => {
  let newRecipe = req.body

  newRecipe = new Recipe({
    ...newRecipe,
    rating: 0,
    uid: req.user.uid,
    totalTime: newRecipe.prepTime + newRecipe.cookTime
  });

  try {
    await newRecipe.save()
    return res.status(200).json(newRecipe)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error })
  }
});



module.exports = router;