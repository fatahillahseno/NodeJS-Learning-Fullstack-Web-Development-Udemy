const User = require("../user.model.js");
const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const errorLogger = require("../../helpers/errorLogger.helper.js");
const bcrypt = require("bcrypt");

async function createUserProvider(req, res) {
  const validatedData = matchedData(req);

  try {
    const existingUser = await User.findOne({ email: validatedData.email });
    if (existingUser) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "A user with this email already exists",
      });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(validatedData.password, salt);

    const user = new User({
      firstName: validatedData.firstName,
      lastName: validatedData.lastName,
      email: validatedData.email,
      password: hashedPassword,
    });

    await user.save();
    delete user.password;
    return res.status(StatusCodes.CREATED).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (error) {
    errorLogger("Error while creating an user", req, error);
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process your request at the moment, please try later.",
    });
  }
}

module.exports = createUserProvider;
