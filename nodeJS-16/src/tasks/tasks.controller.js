const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const createTaskProvider = require("./providers/createTask.provider.js");
const getTasksProvider = require("./providers/getTasks.provider.js");

async function handleGetTasks(req, res) {
  const task = await getTasksProvider(req, res);

  res.status(StatusCodes.OK).json(task);
}

async function handlePostTasks(req, res) {
  const task = await createTaskProvider(req, res);
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
