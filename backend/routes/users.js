const router = require('express').Router();
const User = require('../models/user.model');
const firebase = require('../fbConfig')
const validator = require('validator')
const fbAdmin = require('../fbAdminConfig')

router.route('/').get((req, res) => {
  res.status(200).json("test response")
});





router.route('/signup').post(async (req, res) => {
  // get data from client
  let newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  }


  // validate data
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
  if (Object.keys(error).length > 0) {
    return res.status(400).json({ error })
  }


  // signup logic
  try {
    // create user on Firebase auth
    const data = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
    const token = await data.user.getIdToken()

    // create user database on MongoDB
    newUser = new User({
      uid: data.user.uid,
      email: data.user.email,
      displayName: data.user.displayName || "",
      preferences: [],
      photoURL: data.user.photoURL || "",
      country: "",
      cuisine: "",
    })
    await newUser.save()

    // return ok response when signed up successfully
    return res.status(200).json({ ...newUser._doc, token })

  } catch (error) {
    // error either firebase signup fail or mongodb create fail
    console.error(error)
    return res.status(400).json({ error })
  }
})







router.route('/signin').post(async (req, res) => {
  // get data from client
  let user = {
    email: req.body.email,
    password: req.body.password
  }


  // validate data
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
  if (Object.keys(error).length > 0) {
    return res.status(400).json({ error })
  }



  // signin logic
  try {
    // signin user on Firebase auth
    const data = await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    const token = await data.user.getIdToken()

    user = await User.findOne()

    // return ok response when signed up successfully
    return res.status(200).json({ ...user._doc, token })

  } catch (error) {
    // error either firebase signin fail or mongodb create fail
    console.error(error)
    return res.status(400).json({ error })
  }
})








router.route('/update').post(async (req, res) => {
  // get data from client
  let user = {
    uid: req.body.uid,
    email: req.body.email,
    displayName: req.body.displayName,
    photoURL: req.body.photoURL,
    preferences: req.body.preferences,
    country: req.body.country,
    cuisine: req.body.cuisine,
    // token: req.body.token,
  }


  // validate data
  const error = {}
  try {
    const token = await firebase.auth().getIdToken(user.uid)
    const decodedToken = await fbAdmin.auth().verifyIdToken(token)
    console.log({ token, decodedToken })
    return res.json({ token, decodedToken })
  } catch (error) {
    console.error(error)
    return res.status(400).json({ error })
  }


  // if (validator.isEmpty(user.email)) {
  //   error.code = "auth/empty-email"
  //   error.message = "Email must not be empty."
  // } else if (!validator.isEmail(user.email)) {
  //   error.code = "auth/invalid-email"
  //   error.message = "The email address is badly formatted."
  // }
  // if (validator.isEmpty(user.password)) {
  //   error.code = "auth/empty-password"
  //   error.message = "Password must not be empty."
  // }
  // if (Object.keys(error).length > 0) {
  //   return res.status(400).json({ error })
  // }



  // // signin logic
  // try {
  //   // signin user on Firebase auth
  //   const data = await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  //   const token = await data.user.getIdToken()

  //   user = await User.findOne()

  //   // return ok response when signed up successfully
  //   return res.status(200).json({ ...user._doc, token })

  // } catch (error) {
  //   // error either firebase signin fail or mongodb create fail
  //   console.error(error)
  //   return res.status(400).json({ error })
  // }
})



module.exports = router;