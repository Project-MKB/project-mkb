<<<<<<< HEAD
const router = require('express').Router();
const User = require('../models/user.model');
const firebase = require('../util/fbConfig')
const { validateSignupData, validateSigninData } = require('../util/validators')
const fbAdmin = require('../util/fbAdminConfig')
const fbAuth = require('../util/fbAuth')



router.route('/').get((req, res) => {
  res.status(200).json("test response")
});





router.post('/signup', async (req, res) => {
  // get data from client
  let newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  }

  // validate data
  const { error, valid } = validateSignupData(newUser)
  if (!valid) {
    return res.status(400).json({ error })
=======
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
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405
  }

  // signup logic
  try {
    // create user on Firebase auth
<<<<<<< HEAD
    const data = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
    const token = await data.user.getIdToken()
=======
    const data = await firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password);
    const token = await data.user.getIdToken();
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405

    // create user database on MongoDB
    newUser = new User({
      uid: data.user.uid,
      email: data.user.email,
      displayName: data.user.displayName || "",
      preferences: [],
      photoURL: data.user.photoURL || "",
      country: "",
<<<<<<< HEAD
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







router.post('/signin', async (req, res) => {
=======
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
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405
  // get data from client
  let user = {
    email: req.body.email,
    password: req.body.password
<<<<<<< HEAD
  }

  // validate data
  const { error, valid } = validateSigninData(user)
  if (!valid) {
    return res.status(400).json({ error })
=======
  };

  // validate data
  const { error, valid } = validateSigninData(user);
  if (!valid) {
    return res.status(400).json({ error });
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405
  }

  // signin logic
  try {
    // signin user on Firebase auth
<<<<<<< HEAD
    const data = await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    const token = await data.user.getIdToken()

    user = await User.findOne({ uid: data.user.uid })

    // return ok response when signed up successfully
    return res.status(200).json({ ...user._doc, token })

  } catch (error) {
    // error either firebase signin fail or mongodb find fail
    console.error(error)
    return res.status(400).json({ error })
  }
})







router.post('/update', fbAuth, async (req, res) => {
=======
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
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405
  try {
    const user = await User.findOneAndUpdate(
      { uid: req.user.uid },
      {
        displayName: req.body.displayName,
        photoURL: req.body.photoURL,
        preferences: req.body.preferences,
        country: req.body.country,
<<<<<<< HEAD
        cuisine: req.body.cuisine,
      },
      { useFindAndModify: false },
      async () => {
        return await User.findOne({ uid: req.user.uid })
      }
    )


    // return ok response when updated successfully
    return res.status(200).json(user)

  } catch (error) {
    console.error(error)
    return res.status(400).json({ error })
  }
})




=======
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
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405

module.exports = router;
