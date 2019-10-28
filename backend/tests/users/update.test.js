/* 
  # update test
  1. should update user successfully
  2. should throw error when token is invalid
  3. should throw error when data type is wrong
*/

const { setupDB, request, fbAdmin } = require('../test-setup')
setupDB('updateUser-test')

describe('Update user info test', () => {
  const update = async user => {
    return await request.post('/users/update').send(user)
  }

  test('Should update user successfully', async done => {
    const res = await update({
      _id: "5db74f50af6e1e2962b12cfc",
      uid: "kEfnyjtOEpX2MIKBQrVtDv9yTEm2",
      email: "test@test.com",
      displayName: "Test Name",
      photoURL: "https://picsum.photos/100",
      preferences: ["mexican", "spicy", "vegiterian"],
      country: "United States",
      cuisine: "Korean",
      createdAt: "2019-10-28T20:28:00.641Z",
      updatedAt: "2019-10-28T20:28:00.641Z",
      token: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImEwYjQwY2NjYmQ0OWQxNmVkMjg2MGRiNzIyNmQ3NDZiNmZhZmRmYzAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvamVjdC1ta2IiLCJhdWQiOiJwcm9qZWN0LW1rYiIsImF1dGhfdGltZSI6MTU3MjI5NDg2NywidXNlcl9pZCI6ImtFZm55anRPRXBYMk1JS0JRclZ0RHY5eVRFbTIiLCJzdWIiOiJrRWZueWp0T0VwWDJNSUtCUXJWdER2OXlURW0yIiwiaWF0IjoxNTcyMjk0ODY3LCJleHAiOjE1NzIyOTg0NjcsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0QHRlc3QuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Uos2afKp2XdHWCQiR-hjS8pTVN4jlRqpxxdJKxqkrMSwSbN8b9RM0sU1A_mtGEhpU7QENfXVA7fpwKD6kvJV7EjLLymJBWEGbKpZ3N3M8lpLU_YX-ZFkYW-oaUsiVuGOpDxUWrcinRS4BlWrTlLGl_5MvwUue-hRM27_qHLon3vTbCldoo4FCLKrPMcXpzvIkSxrMj9c_pEm4jHuyJlVdBe4MjNNxOSW6q11R0ZPWDBXC42OtDcFwkWzUNLm_edFxq6R61IefnOqKKFvGmWXPf6uLDH-uAXzKvT4Alj1tRqruhW5jYf-VXihgr6h7KNCVb40Ohc57jvGPGObGtGWSg",
      __v: 0,
    })

    const updatedUser = res.body
    expect(updatedUser.email).toBe('test@test.com')
    expect(updatedUser.displayName).toBe('Test Name')
    expect(updatedUser.photoURL).toBe('https://picsum.photos/100')
    expect(updatedUser.preferences.sort()).toEqual(["mexican", "spicy", "vegiterian"].sort())
    expect(updatedUser.country).toBe('United States')
    expect(updatedUser.cuisine).toBe('Korean')

    done()
  })

  // test('should throw error when email is empty', async done => {
  //   const res = await signup({
  //     email: '',
  //     password: 'test123',
  //     confirmPassword: 'test123'
  //   })

  //   expect(res.body.error.code).toBe("auth/empty-email")
  //   done()
  // })

})


