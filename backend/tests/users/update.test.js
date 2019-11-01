/* 
  # update test
  1. should update user successfully
  2. should throw error when token is invalid (auth/argument-error)
  3. should throw error when data type is wrong
*/

const { setupDB, request, fbAdmin, fb } = require("../test-setup")
setupDB("updateUser-test")

describe("Update user info test", () => {
  test("Should update user successfully", async done => {
    const token = await getToken()
    const res = await update(
      {
        displayName: "Test Name",
        photoURL: "https://picsum.photos/100",
        preferences: ["mexican", "spicy", "vegiterian"],
        country: "United States",
        cuisine: "Korean"
      },
      token
    )

    const updatedUser = res.body
    expect(updatedUser.email).toBe("test99@test.com")
    expect(updatedUser.displayName).toBe("Test Name")
    expect(updatedUser.photoURL).toBe("https://picsum.photos/100")
    expect(updatedUser.preferences.sort()).toEqual(
      ["mexican", "spicy", "vegiterian"].sort()
    )
    expect(updatedUser.country).toBe("United States")
    expect(updatedUser.cuisine).toBe("Korean")

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

  const update = async (user, token) => {
    return await request
      .post("/users/update")
      .send({
        displayName: user.displayName,
        photoURL: user.photoURL,
        preferences: user.preferences,
        country: user.country,
        cuisine: user.cuisine
      })
      .set("Authorization", "Bearer " + token)
  }

  const getToken = async () => {
    const data = await fb
      .auth()
      .signInWithEmailAndPassword("test99@test.com", "test123")
    return await data.user.getIdToken()
  }

  const signup = async user => {
    return await request.post("/users/signup").send({
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword
    })
  }

  let testUid = ""
  beforeAll(async () => {
    const r = await signup({
      email: "test99@test.com",
      password: "test123",
      confirmPassword: "test123"
    })
    testUid = r.body.uid
  })
  afterAll(async () => {
    await fbAdmin.auth().deleteUser(testUid)
  })
})
