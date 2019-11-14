<<<<<<< HEAD
const fbAdmin = require('firebase-admin')
=======
const fbAdmin = require("firebase-admin");
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405
const serviceAccount = require("../project-mkb-firebase-adminsdk-uia11-70097d3253.json");

fbAdmin.initializeApp({
  credential: fbAdmin.credential.cert(serviceAccount)
<<<<<<< HEAD
})

module.exports = fbAdmin
=======
});

module.exports = fbAdmin;
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405
