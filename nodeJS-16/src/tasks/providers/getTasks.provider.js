const Task = require("../task.model.js");

async function getTasksProvider(req, res) {
  return await Task.find();
}

module.exports = getTasksProvider;
