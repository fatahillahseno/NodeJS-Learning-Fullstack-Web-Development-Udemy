const User = require("../user.model.js");
const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const errorLogger = require("../../helpers/errorLogger.helper.js");
const Task = require("../../tasks/task.model.js");

async function createUserProvider(req, res) {
  const validatedData = matchedData(req);

  try {
    const user = new User({
      firstName: validatedData.firstName,
      lastName: validatedData.lastName,
      email: validatedData.email,
      password: validatedData.password,
    });

    await user.save();
    delete user.password;
    return res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    errorLogger("Error while creating an user", req, error);
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process your request at the moment, please try later.",
    });
  }
}

module.exports = createUserProvider;
