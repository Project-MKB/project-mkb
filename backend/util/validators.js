const validator = require("validator");

exports.validateSignupData = newUser => {
  const error = {};
  if (validator.isEmpty(newUser.email)) {
    error.code = "auth/empty-email";
    error.message = "Email must not be empty.";
  } else if (!validator.isEmail(newUser.email)) {
    error.code = "auth/invalid-email";
    error.message = "The email address is badly formatted.";
  }
  if (validator.isEmpty(newUser.password)) {
    error.code = "auth/empty-password";
    error.message = "Password must not be empty.";
  } else if (validator.isEmpty(newUser.confirmPassword)) {
    error.code = "auth/empty-confirmPassword";
    error.message = "Confirm Password must not be empty";
  } else if (newUser.password !== newUser.confirmPassword) {
    error.code = "auth/password-not-match";
    error.message = "Password must match";
  }

  return {
    error,
    valid: Object.keys(error).length === 0 ? true : false
  };
};

exports.validateSigninData = user => {
  const error = {};
  if (validator.isEmpty(user.email)) {
    error.code = "auth/empty-email";
    error.message = "Email must not be empty.";
  } else if (!validator.isEmail(user.email)) {
    error.code = "auth/invalid-email";
    error.message = "The email address is badly formatted.";
  }
  if (validator.isEmpty(user.password)) {
    error.code = "auth/empty-password";
    error.message = "Password must not be empty.";
  }

  return {
    error,
    valid: Object.keys(error).length === 0 ? true : false
  };
};

exports.validateRecipeData = recipe => {
  const error = {};
  if (recipe.title.trim() === "") {
    error.code = "recipe/empty-title";
    error.message = "Title must not be empty.";
  }

  if (recipe.ingredients.length === 0) {
    error.code = "recipe/empty-ingredients";
    error.message = "Ingredients must not be empty.";
  }

  if (recipe.directions.length === 0) {
    error.code = "recipe/empty-directions";
    error.message = "Directions must not be empty.";
  }

  if (recipe.prepTime === "") {
    error.code = "recipe/empty-prepTime";
    error.message = "Preparation time must not be empty.";
  }

  if (recipe.cookTime === "") {
    error.code = "recipe/empty-cookTime";
    error.message = "Cook time must not be empty.";
  }

  if (recipe.servingSize === "") {
    error.code = "recipe/empty-servingSize";
    error.message = "Serving size must not be empty.";
  }

  if (recipe.category.trim() === "") {
    error.code = "recipe/empty-category";
    error.message = "Category must not be empty.";
  }

  if (recipe.cuisine.trim() === "") {
    error.code = "recipe/empty-cuisine";
    error.message = "Cuisine must not be empty.";
  }

  if (recipe.difficulty === "") {
    error.code = "recipe/empty-difficulty";
    error.message = "Difficulty must not be empty.";
  }

  if (recipe.mainImage.trim() === "") {
    error.code = "recipe/empty-mainImage";
    error.message = "Please add main image.";
  }

  return {
    error,
    valid: Object.keys(error).length === 0 ? true : false
  };
};
