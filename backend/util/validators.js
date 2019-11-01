const validator = require("validator")

exports.validateSignupData = newUser => {
  const error = {}
  if (validator.isEmpty(newUser.email)) {
    error.code = "auth/empty-email"
    error.message = "Email must not be empty."
  } else if (!validator.isEmail(newUser.email)) {
    error.code = "auth/invalid-email"
    error.message = "The email address is badly formatted."
  }
  if (validator.isEmpty(newUser.password)) {
    error.code = "auth/empty-password"
    error.message = "Password must not be empty."
  } else if (validator.isEmpty(newUser.confirmPassword)) {
    error.code = "auth/empty-confirmPassword"
    error.message = "Confirm Password must not be empty"
  } else if (newUser.password !== newUser.confirmPassword) {
    error.code = "auth/password-not-match"
    error.message = "Password must match"
  }

  return {
    error,
    valid: Object.keys(error).length === 0 ? true : false
  }
}

exports.validateSigninData = user => {
  const error = {}
  if (validator.isEmpty(user.email)) {
    error.code = "auth/empty-email"
    error.message = "Email must not be empty."
  } else if (!validator.isEmail(user.email)) {
    error.code = "auth/invalid-email"
    error.message = "The email address is badly formatted."
  }
  if (validator.isEmpty(user.password)) {
    error.code = "auth/empty-password"
    error.message = "Password must not be empty."
  }

  return {
    error,
    valid: Object.keys(error).length === 0 ? true : false
  }
}
