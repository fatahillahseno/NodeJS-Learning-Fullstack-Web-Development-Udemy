const express = require("express");
const tasksRouter = require("./tasks/tasks.router.js"); //import task router

const app = express();
const port = 3001;

app.use(express.json());
// definie all the routes
app.use("/", tasksRouter); // root

app.listen(port, () => {
  console.log(`App Listening to Port: ${port}`);
});
