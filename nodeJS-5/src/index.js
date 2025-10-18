const express = require("express");
const app = express();

const port = 3001;
app.listen(port, () => {
  console.log(`App Listening to Port: ${port}`);
});

// ini adalah route
app.get("/some.text", (req, res) => {
  console.log("\nRequest URL", req.url);
  res.send("Hello World");
});

app.get("/posts?", (req, res) => {
  //karakter s menjadi optional
  console.log("\nRequest URL", req.url);
  res.send("Hello World");
});

app.get("/tag*", (req, res) => {
  //huruf setelah kata tag bisa diisi apa saja
  // " * " disebut wild card
  console.log("\nRequest URL", req.url);
  res.send("Hello World");
});

app.get("/error/*", (req, res) => {
  console.log("\nRequest URL", req.url);
  res.send("Hello World");
});

// menggunakan regular expression
// tidak perlu menggunakan kutip ganda
app.get(/.*fly$/, (req, res) => {
  console.log("\nRequest URL", req.url);
  res.send("Hello World");
});
