const fbAdmin = require("./fbAdminConfig");

module.exports = async (req, res, next) => {
  let token;
  const auth = req.headers.authorization;
  console.log(req.headers);
  if (auth && auth.startsWith("Bearer ")) {
    token = auth.split("Bearer ")[1];
  } else {
    return res.status(403).json({
      error: {
        code: "auth/no-token",
        message: "No token found from the request header"
      }
    });
  }

  try {
    const decodedToken = await fbAdmin.auth().verifyIdToken(token);
    req.user = decodedToken;
    // const user = User.findOne({ uid: req.user.uid })
    return next();
  } catch (error) {
    return res.status(403).json({ error });
  }
  next();
};
