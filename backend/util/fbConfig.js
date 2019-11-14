<<<<<<< HEAD
const firebase = require('firebase')
=======
const firebase = require("firebase");
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

<<<<<<< HEAD
firebase.initializeApp(firebaseConfig)

module.exports = firebase
=======
firebase.initializeApp(firebaseConfig);

module.exports = firebase;
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405
