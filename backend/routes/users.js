const router = require("express").Router();
const User = require("../models/user.model");
const firebase = require("../util/fbConfig");
const {
  validateSignupData,
  validateSigninData
} = require("../util/validators");
const fbAuth = require("../util/fbAuth");

// get authenticated user
router.get("/", fbAuth, async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.user.uid });
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
});

// signup user
router.post("/signup", async (req, res) => {
  // get data from client
  let newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  };

  // validate data
  const { error, valid } = validateSignupData(newUser);
  if (!valid) {
    return res.status(400).json({ error });
  }

  // signup logic
  try {
    // create user on Firebase auth
    const data = await firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password);
    const token = await data.user.getIdToken();

    // create user database on MongoDB
    newUser = new User({
      uid: data.user.uid,
      email: data.user.email,
      displayName: data.user.displayName || "",
      preferences: [],
      photoURL: data.user.photoURL || "",
      country: "",
      cuisine: ""
    });
    await newUser.save();

    // return ok response when signed up successfully
    return res.status(200).json({ ...newUser._doc, token });
  } catch (error) {
    // error either firebase signup fail or mongodb create fail
    console.error(error);
    return res.status(400).json({ error });
  }
});

// signin user
router.post("/signin", async (req, res) => {
  // get data from client
  let user = {
    email: req.body.email,
    password: req.body.password
  };

  // validate data
  const { error, valid } = validateSigninData(user);
  if (!valid) {
    return res.status(400).json({ error });
  }

  // signin logic
  try {
    // signin user on Firebase auth
    const data = await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password);
    const token = await data.user.getIdToken();

    user = await User.findOne({ uid: data.user.uid });

    // return ok response when signed up successfully
    return res.status(200).json({ ...user._doc, token });
  } catch (error) {
    // error either firebase signin fail or mongodb find fail
    console.error(error);
    return res.status(400).json({ error });
  }
});

// update user data
router.post("/update", fbAuth, async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { uid: req.user.uid },
      {
        displayName: req.body.displayName,
        photoURL: req.body.photoURL,
        preferences: req.body.preferences,
        country: req.body.country,
        cuisine: req.body.cuisine
      },
      { useFindAndModify: false },
      async () => {
        return await User.findOne({ uid: req.user.uid });
      }
    );

    // return ok response when updated successfully
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error });
  }
});

module.exports = router;
