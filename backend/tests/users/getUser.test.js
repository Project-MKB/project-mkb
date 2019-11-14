/* 
  # getUser test
  1. should receive user successfully
*/

const { setupDB, request } = require("../test-setup");
const { getToken, signup, deleteUser } = require("../auth-setup");
setupDB("getUser-test");

describe("Get user info test", () => {
  let testUid = "";
  beforeAll(async () => {
    testUid = await signup();
  });
  afterAll(() => deleteUser(testUid));

  const getUser = async token => {
    return await request.get("/users").set("Authorization", "Bearer " + token);
  };

  test("Should get user info successfully", async done => {
    const token = await getToken();
    const res = await getUser(token);

    const user = res.body;
    expect(user.email).toBe("test99@test.com");
    expect(user.displayName).toBe("");
    expect(user.photoURL).toBe("");
    expect(user.preferences).toEqual([]);
    expect(user.country).toBe("");
    expect(user.cuisine).toBe("");

    done();
  });
});
