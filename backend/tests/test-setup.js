const app = require('../app')
const request = require('supertest')(app)
const mongoose = require('mongoose')
const fbAdmin = require('firebase-admin')
const serviceAccount = require("../project-mkb-firebase-adminsdk-uia11-70097d3253.json");

fbAdmin.initializeApp({
  credential: fbAdmin.credential.cert(serviceAccount)
})


async function removeAllCollections() {
  const collections = Object.keys(mongoose.connection.collections)
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName]
    try {
      await collection.deleteMany()
    } catch (error) {
      console.error(error)
    }
  }
}

async function dropAllCollections() {
  const collections = Object.keys(mongoose.connection.collections)
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName]
    try {
      await collection.drop()
    } catch (error) {
      if (error.message === 'ns not found') return
      console.log(error)
    }
  }
}



module.exports = {
  setupDB(databaseName) {
    // connect database before running test suite
    beforeAll(async () => {
      await mongoose.connect(`mongodb+srv://${process.env.ATLAS_CRED}@cluster0-we6pg.mongodb.net/${databaseName}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      })
    })

    // clean up database between each test
    afterEach(async () => {
      await removeAllCollections()
    })

    // disconnect database
    afterAll(async () => {
      await dropAllCollections()
      await mongoose.connection.close()
    })
  },
  request, fbAdmin
}