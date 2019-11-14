<<<<<<< HEAD
const app = require('../app')
const request = require('supertest')(app)
const mongoose = require('mongoose')
const fbAdmin = require('../util/fbAdminConfig')
const fb = require('../util/fbConfig')


async function removeAllCollections() {
  const collections = Object.keys(mongoose.connection.collections)
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName]
    try {
      await collection.deleteMany()
    } catch (error) {
      console.error(error)
=======
const app = require("../app");
const request = require("supertest")(app);
const mongoose = require("mongoose");
const fbAdmin = require("../util/fbAdminConfig");
const fb = require("../util/fbConfig");

async function removeAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    try {
      await collection.deleteMany();
    } catch (error) {
      console.error(error);
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405
    }
  }
}

async function dropAllCollections() {
<<<<<<< HEAD
  const collections = Object.keys(mongoose.connection.collections)
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName]
    try {
      await collection.drop()
    } catch (error) {
      if (error.message === 'ns not found') return
      console.log(error)
=======
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    try {
      await collection.drop();
    } catch (error) {
      if (error.message === "ns not found") return;
      console.log(error);
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405
    }
  }
}

<<<<<<< HEAD


=======
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405
module.exports = {
  setupDB(databaseName) {
    // connect database before running test suite
    beforeAll(async () => {
<<<<<<< HEAD
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
  request, fbAdmin, fb
}
=======
      await mongoose.connect(
        `mongodb+srv://${process.env.ATLAS_CRED}@cluster0-we6pg.mongodb.net/${databaseName}?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true
        }
      );
    });

    // clean up database between each test
    afterEach(async () => {
      await removeAllCollections();
    });

    // disconnect database
    afterAll(async () => {
      await dropAllCollections();
      await mongoose.connection.close();
    });
  },
  request,
  fbAdmin,
  fb
};
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405
