const express = require("express");
const tasksRouter = require("./tasks/tasks.router.js"); //import task router

const app = express();
const port = 3001;

const middleWare = function (req, res, next) {
  req.info = { appname: "Tasks Manager", author: "Sense" };
  next();
};

app.use(middleWare);
// definie all the routes
app.use("/", tasksRouter); // root

app.listen(port, () => {
  console.log(`App Listening to Port: ${port}`);
});
