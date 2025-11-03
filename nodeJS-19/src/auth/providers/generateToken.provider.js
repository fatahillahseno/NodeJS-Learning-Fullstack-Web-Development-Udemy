const jwt = require("jsonwebtoken");

function generateTokenProvider(user) {
  const payload = {
    // subscribers
    sub: user["_id"],
    email: user.email,
    //issued at time
    iat: Math.floor(Date.now() / 1000),
    exp:
      Math.floor(Date.now() / 1000) +
      parseInt(process.env.JWT_ACCESS_EXPIRATION_TTL),
  };

  return jwt.sign(payload, process.env.JWT_SECRET);
}

module.exports = generateTokenProvider;
