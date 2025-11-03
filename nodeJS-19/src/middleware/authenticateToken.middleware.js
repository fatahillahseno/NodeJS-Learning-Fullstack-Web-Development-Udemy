const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "You are not authorized to perform this request." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) {
      return res.status(StatusCodes.FORBIDDEN).json({
        message: "Please log in again, invalid token.",
      });
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
