/* 
  # Signup test
  1. should signup successfully
  2. should throw error when email is empty
  3. should throw error when password is empty
  4. should throw error when email is invalid
  5. should throw error when password don't match
  6. should throw error when password is less than 6
  7. should throw error when email already exists
*/

const { setupDB, request, fbAdmin } = require('../test-setup')
setupDB('signup-test')

describe('Sign up test', () => {
  const signup = async user => {
    return await request.post('/users/signup').send({
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword
    })
  }

  test('Should signup successfully', async done => {
    const res = await signup({
      email: 'test@test.com',
      password: 'test123',
      confirmPassword: 'test123'
    })

    const newUser = res.body
    expect(newUser.email).toBe('test@test.com')
    expect(newUser.uid).toBeTruthy()
    expect(newUser.token).toBeTruthy()

    // delete user that was just created for test
    const uid = newUser.uid
    await fbAdmin.auth().deleteUser(uid)
    done()
  })

  test('should throw error when email is empty', async done => {
    const res = await signup({
      email: '',
      password: 'test123',
      confirmPassword: 'test123'
    })

    expect(res.body.error.code).toBe("auth/empty-email")
    done()
  })

  test('should throw error when password is empty', async done => {
    const res = await signup({
      email: 'test@test.com',
      password: '',
      confirmPassword: ''
    })

    expect(res.body.error.code).toBe('auth/empty-password')
    done()
  })

  test('should throw error when email is invalid', async done => {
    const res = await signup({
      email: 'test',
      password: 'test123',
      confirmPassword: 'test123'
    })

    expect(res.body.error.code).toBe('auth/invalid-email')
    done()
  })

  test("should throw error when password don't match", async done => {
    const res = await signup({
      email: 'test@test.com',
      password: 'test123',
      confirmPassword: 'test1234'
    })

    expect(res.body.error.code).toBe('auth/password-not-match')
    done()
  })

  test('should throw error when password is less than 6', async done => {
    const res = await signup({
      email: 'test@test.com',
      password: 'test1',
      confirmPassword: 'test1'
    })

    expect(res.body.error.code).toBe('auth/weak-password')
    done()
  })

  test('should throw error when email already exists', async done => {
    const r = await signup({
      email: 'test@test.com',
      password: 'test123',
      confirmPassword: 'test123'
    })
    const res = await signup({
      email: 'test@test.com',
      password: 'test123',
      confirmPassword: 'test123'
    })

    // delete user that was just created for test
    await fbAdmin.auth().deleteUser(r.body.uid)

    expect(res.body.error.code).toBe('auth/email-already-in-use')
    done()
  })
})


