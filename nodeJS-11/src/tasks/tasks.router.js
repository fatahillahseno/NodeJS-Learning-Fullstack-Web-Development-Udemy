const express = require("express");
const tasksController = require("./tasks.controller.js");

const tasksRouter = express.Router();

// create router called tasks
// dan kirim response-nya
// route task only
tasksRouter.get("/tasks", tasksController.handleGetTasks);
tasksRouter.post("/tasks", tasksController.handlePostTasks);
tasksRouter.patch("/tasks", tasksController.handlePatchTasks);
tasksRouter.delete("/tasks", tasksController.handleDeleteTasks);

module.exports = tasksRouter;
