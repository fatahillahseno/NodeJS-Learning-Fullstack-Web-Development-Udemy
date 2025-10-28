const express = require("express");
const tasksController = require("./tasks.controller.js");
const { StatusCodes } = require("http-status-codes");
const { validationResult } = require("express-validator");
const createTaskValidator = require("./validators/createTask.validator.js");
const getTaskValidator = require("./validators/getTasks.validator.js");

const tasksRouter = express.Router();

tasksRouter.get("/tasks", getTaskValidator, (req, res) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    return tasksController.handleGetTasks(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});

tasksRouter.post("/tasks", createTaskValidator, (req, res) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    return tasksController.handlePostTasks(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});

tasksRouter.patch("/tasks", tasksController.handlePatchTasks);

tasksRouter.delete("/tasks", tasksController.handleDeleteTasks);

module.exports = tasksRouter;
