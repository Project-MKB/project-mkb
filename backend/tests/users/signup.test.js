// check out this website for refactoring
// https://zellwk.com/blog/jest-and-mongoose/

const app = require('../../app')
const request = require('supertest')(app)
const mongoose = require('mongoose')
const databaseName = 'signup-test'
const admin = require('firebase-admin')
const serviceAccount = require("../../project-mkb-firebase-adminsdk-uia11-70097d3253.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})


// connect mongodb before running test suite
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

afterAll(async () => {
  await dropAllCollections()
  await mongoose.connection.close()
})


describe('Sign up test', () => {
  test('Should signup successfully', async done => {
    const email = 'test@test.com'
    const res = await request.post('/users/signup').send({
      email,
      password: 'test123',
      confirmPassword: 'test123'
    })

    const newUser = res.body
    expect(newUser.email).toBe(email)
    expect(newUser.uid).toBeTruthy()
    expect(newUser.token).toBeTruthy()

    // delete user that was just created for test
    const uid = newUser.uid
    await admin.auth().deleteUser(uid)
    done()
  })

  test('Should throw error - empty email', async done => {
    const email = ''
    const res = await request.post('/users/signup').send({
      email,
      password: 'test123',
      confirmPassword: 'test123'
    })

    const error = res.body.error
    expect(error.code).toBe("auth/empty-email")

    done()
  })
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
      console.log(error)
    }
  }
}