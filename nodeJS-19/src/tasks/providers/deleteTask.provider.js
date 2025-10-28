const Task = require("../task.model.js");

async function deleteTaskProvider(req, res) {
  // delete data in database
  return await await Task.deleteOne({ _id: req.body["_id"] });
}

module.exports = deleteTaskProvider;
