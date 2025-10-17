const express = require("express");
const app = express();

const port = 3001;
app.listen(port, () => {
  console.log(`App Listening to Port: ${port}`);
});

// ini adalah route
app.get("/users/:role/", (req, res) => {
  console.log("Request Params", req.params);
  console.log("Request Query", req.query);
  res.send("Hello World");
});

app.get("/tasks/:users?", (req, res) => {
  //optional parameters menggunakan ?
  console.log("Request Params", req.params);
  res.send("Hello World");
});

app.get("/users/:role/:status", (req, res) => {
  console.log("Request Params", req.params);
  res.send("Hello World");
});

app.get("/users/:role/:status", (req, res) => {
  console.log("Request Params", req.params);
  res.send("Hello World");
});
