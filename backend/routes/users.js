const router = require('express').Router();
const User = require('../models/user.model');
const firebase = require('../fbConfig')

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

});

router.route('/signup').post(async (req, res) => {
  const username = req.body.username
  let newUser = {
    username: req.body.username,
    password: req.body.password
  }

  try {
    // Create user on Firebase auth
    const data = await firebase.auth().createUserWithEmailAndPassword(newUser.username, newUser.password)

    // Create user database on MongoDB
    newUser = new User({
      uid: data.user.uid,
      username
    })
    await newUser.save()

    // Return ok response when signed up successfully
    return res.status(200).json({ message: `user ${data.user.uid} signed up successfully` })

  } catch (error) {
    // Error either firebase signup fail or mongodb create fail
    console.error(error)
    return res.status(400).json({ error })
  }
})

module.exports = router;