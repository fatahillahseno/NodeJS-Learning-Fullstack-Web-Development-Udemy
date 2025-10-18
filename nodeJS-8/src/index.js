const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const tasksRouter = require("./tasks/tasks.router.js"); //import task router

const app = express();
const port = 3001;

app.use(express.json());

let accesLogStream = fs.createWriteStream(
  path.join(__dirname, "..", "access.log"),
  {
    flags: "a",
  }
);

app.use(morgan("combined", { stream: accesLogStream }));

// definie all the routes
app.use("/", tasksRouter); // root

app.listen(port, () => {
  console.log(`App Listening to Port: ${port}`);
});
