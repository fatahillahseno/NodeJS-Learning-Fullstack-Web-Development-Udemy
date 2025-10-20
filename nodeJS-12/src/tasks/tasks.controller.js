const { StatusCodes, ReasonPhrases } = require("http-status-codes");
//StatusCodes untuk kodenya
// ReasonPhrases untuk yang bisa dibaca manusia

// handle Request dari api endpoint
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

  res.status(StatusCodes.OK).json({
    status: "success",
    statusCode: StatusCodes.OK,
    message: ReasonPhrases.OK,
    data: response,
  });
}

function handlePostTasks(req, res) {
  res.send("POST Tasks Controller");
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
