/* 
  # getUser test
  1. should receive user successfully
  2. should throw error when token is invalid (auth/argument-error)
*/

const { setupDB, request, fbAdmin, fb } = require('../test-setup')
setupDB('updateUser-test')

describe('Get user info test', () => {
  test('Should get user info successfully', async done => {
    const token = await getToken()
    const res = await getUser(token)

    const user = res.body
    expect(user.email).toBe('test99@test.com')
    expect(user.displayName).toBe('')
    expect(user.photoURL).toBe('')
    expect(user.preferences).toEqual([])
    expect(user.country).toBe('')
    expect(user.cuisine).toBe('')

    done()
  })




  const getUser = async (token) => {
    return await request.get('/users')
      .set('Authorization', 'Bearer ' + token)
  }

  const getToken = async () => {
    const data = await fb.auth().signInWithEmailAndPassword("test99@test.com", "test123")
    return await data.user.getIdToken()
  }

  const signup = async user => {
    return await request.post('/users/signup').send({
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword
    })
  }

  let testUid = ""
  beforeAll(async () => {
    const r = await signup({
      email: 'test99@test.com',
      password: 'test123',
      confirmPassword: 'test123'
    })
    testUid = r.body.uid
  })
  afterAll(async () => {
    await fbAdmin.auth().deleteUser(testUid)
  })
})


