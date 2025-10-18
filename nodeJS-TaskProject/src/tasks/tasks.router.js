const express = require("express");

const tasksRouter = express.Router();

// create router called tasks
// dan kirim response-nya
// route task only
tasksRouter.get("/tasks", (req, res) => {
  console.log(req.info);
  return res.send(req.info);
});
tasksRouter.post("/tasks", (req, res) => res.send("Create a new Task"));

module.exports = tasksRouter;
