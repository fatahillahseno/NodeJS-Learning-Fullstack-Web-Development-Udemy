const express = require("express");

const tasksRouter = express.Router();

// create router called tasks
// dan kirim response-nya
// route task only
tasksRouter.get("/tasks", (req, res) => {
  return res.send("Hello World");
});
tasksRouter.post("/tasks", (req, res) => {
  console.log(req.body);
  console.log(typeof req.body);
  return res.send("Create a new Task");
});

module.exports = tasksRouter;
