const { request, fbAdmin, fb } = require("./test-setup");

exports.getToken = async () => {
  const data = await fb
    .auth()
    .signInWithEmailAndPassword("test99@test.com", "test123");
  return await data.user.getIdToken();
};

exports.signup = async () => {
  const res = await request.post("/users/signup").send({
    email: "test99@test.com",
    password: "test123",
    confirmPassword: "test123"
  });
  return res.body.uid;
};

exports.deleteUser = async testUid => {
  await fbAdmin.auth().deleteUser(testUid);
};
