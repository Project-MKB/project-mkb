const router = require('express').Router();
const User = require('../models/user.model');
const firebase = require('../fbConfig')
const validator = require('validator')

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
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
    error.email = "Email must not be empty"
  } else if (!validator.isEmail(newUser.email)) {
    error.email = "Email is not formatted correctly"
  }

  if (validator.isEmpty(newUser.password)) {
    error.password = "Password must not be empty"
  } else if (validator.isEmpty(newUser.confirmPassword)) {
    error.confirmPassword = "Confirm Password must not be empty"
  } else if (newUser.password !== newUser.confirmPassword) {
    error.password = "Password must match"
  }

  if (Object.keys(error).length > 0) {
    return res.status(400).json({ error })
  }


  // signup logic
  try {
    // create user on Firebase auth
    const data = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)

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
    return res.status(200).json(newUser)

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
    error.email = "Email must not be empty"
  } else if (!validator.isEmail(user.email)) {
    error.email = "Email is not formatted correctly"
  }

  if (validator.isEmpty(user.password)) {
    error.password = "Password must not be empty"
  }

  if (Object.keys(error).length > 0) {
    return res.status(400).json({ error })
  }

  // signin logic
  try {
    // signin user on Firebase auth
    const data = await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    console.log(data.user)

    // return ok response when signed up successfully
    return res.status(200).json(data.user.uid)

  } catch (error) {
    // error either firebase signin fail or mongodb create fail
    console.error(error)
    return res.status(400).json({ error })
  }
})



module.exports = router;