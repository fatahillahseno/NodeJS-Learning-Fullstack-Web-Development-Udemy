// handle Request dari api endpoint
function handleGetTasks(request, response) {
  response.send("GET Tasks Controller");
}

function handlePostTasks(request, response) {
  response.send("POST Tasks Controller");
}

function handlePatchTasks(request, response) {
  response.send("PATCH Tasks Controller");
}

function handleDeleteTasks(request, response) {
  response.send("DELETE Tasks Controller");
}

module.exports = {
  handleGetTasks,
  handlePostTasks,
  handlePatchTasks,
  handleDeleteTasks,
};
