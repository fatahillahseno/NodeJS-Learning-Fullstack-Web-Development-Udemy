const express = require("express");
const usersController = require("./users.controller.js");
const usersRouter = express.Router();

// usersRouter.get("/users", usersController.getDataUser);
usersRouter.post("/create", usersController.handleCreateUser);

module.exports = usersRouter;
