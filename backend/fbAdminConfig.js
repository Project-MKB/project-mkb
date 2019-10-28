const fbAdmin = require('firebase-admin')
const serviceAccount = require("./project-mkb-firebase-adminsdk-uia11-70097d3253.json");

fbAdmin.initializeApp({
  credential: fbAdmin.credential.cert(serviceAccount)
})

module.exports = fbAdmin