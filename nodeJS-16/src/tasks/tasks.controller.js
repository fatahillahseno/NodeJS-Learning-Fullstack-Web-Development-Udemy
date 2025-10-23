const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const Task = require("./task.schema.js");
const responseFormatter = require("../middleware/responseFormatter.js");

function handleGetTasks(req, res) {
  let response = [
    {
      title: "Title of the task",
      date: "2025-01-01T12:00:00",
      description:
        "Ini adalah deskrispi yang ada di dalam task, berisikan apa saja yang akan dilakukan",
      priority: "normal",
      status: "todo",
    },
    {
      title: "Title of the task 2",
      date: "2025-01-01T12:00:00",
      description:
        "Ini adalah deskrispi yang ada di dalam task, berisikan apa saja yang akan dilakukan",
      priority: "normal",
      status: "todo",
    },
  ];

  res.status(StatusCodes.OK).json(response);
}

async function handlePostTasks(req, res) {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    priority: req.body.priority,
    dueDate: req.body.dueDate,
  });

  await task.save();

  res.status(StatusCodes.CREATED).json(task);
}

function handlePatchTasks(req, res) {
  res.send("PATCH Tasks Controller");
}

function handleDeleteTasks(req, res) {
  res.send("DELETE Tasks Controller");
}

module.exports = {
  handleGetTasks,
  handlePostTasks,
  handlePatchTasks,
  handleDeleteTasks,
};
