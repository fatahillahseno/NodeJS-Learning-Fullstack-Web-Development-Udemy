const Task = require("../task.model.js");
async function updateTaskProvider(req, res) {
  // fetch the task based on id
  const task = await Task.findById(req.body["_id"]);
  // update the task
  task.title = req.body.title;
  task.description = req.body.description;
  task.status = req.body.status;
  task.priority = req.body.priority;
  task.dueDate = req.body.dueDate;
  // save update to database
  return await task.save();
}

module.exports = updateTaskProvider;
