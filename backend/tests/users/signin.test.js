/* 
  # Signin test
  1. should signin successfully
  2. should throw error when email is empty
  3. should throw error when password is empty
  4. should throw error when email is invalid
  5. should throw error when no user is found
  6. should throw error when password is wrong
*/

const { setupDB, request, fbAdmin } = require("../test-setup");
const { getToken, signup, deleteUser } = require("../auth-setup");
setupDB("signin-test");

describe("Sign in test", () => {
  let testUid = "";
  beforeAll(async () => {
    testUid = await signup();
  });
  afterAll(() => deleteUser(testUid));

  const signin = async user => {
    return await request.post("/users/signin").send({
      email: user.email,
      password: user.password
    });
  };

  test("Should signin successfully", async done => {
    const res = await signin({
      email: "test99@test.com",
      password: "test123"
    });

    const user = res.body;
    expect(user.email).toBe("test99@test.com");
    expect(user.uid).toBeTruthy();
    expect(user.token).toBeTruthy();

    done();
  });

  test("should throw error when email is empty", async done => {
    const res = await signin({
      email: "",
      password: "test123"
    });

    expect(res.body.error.code).toBe("auth/empty-email");
    done();
  });

  test("should throw error when password is empty", async done => {
    const res = await signin({
      email: "test99@test.com",
      password: ""
    });

    expect(res.body.error.code).toBe("auth/empty-password");
    done();
  });

  test("should throw error when email is invalid", async done => {
    const res = await signin({
      email: "test",
      password: "test123"
    });

    expect(res.body.error.code).toBe("auth/invalid-email");
    done();
  });

  test("should throw error when no user is found", async done => {
    const res = await signin({
      email: "no-user-test@test.com",
      password: "test123"
    });

    expect(res.body.error.code).toBe("auth/user-not-found");
    done();
  });

  test("should throw error when password is wrong", async done => {
    const res = await signin({
      email: "test99@test.com",
      password: "wrong-password"
    });

    expect(res.body.error.code).toBe("auth/wrong-password");
    done();
  });
});
