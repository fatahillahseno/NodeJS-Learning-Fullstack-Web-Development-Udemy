const express = require("express");
const app = express(); //express app

//port mesin (Range : 0 to 65535, safe number for port :3001,3002,5001,5002)
const port = 3001; // terhubung dengan http://localhost:3001

// dapatkan route, di bawah ini adalah get route
app.get("/:category", (req, res) => {
  console.log("Request URL:", req.url);
  console.log("Request Params:", req.params);
  console.log("Request Query:", req.query);
  console.log("Request Headers:", req.headers);
  console.log("Request Method:", req.method);
  res.send("Hello World");
}); //akses ke default route

// buat hello world app
// listen(port, callbackFunction)
app.listen(port, () => {
  console.log(`App listening on port no: ${port}`);
});
