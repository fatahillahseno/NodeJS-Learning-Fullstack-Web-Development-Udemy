const express = require("express");
const fs = require("fs");

// middleware
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

// router
const tasksRouter = require("./tasks/tasks.router.js"); //import task router

const app = express();
const port = 3001;

app.use(express.json());

const corsOptions = {
  /* origin: "*",  ini jika originnya ingin semua*/
  origin: ["example.com", "example2.com"], //hanya domain ini yang akan bisa merequest ke app express
};
// app.use(cors(corsOptions)); //biasakan ketika untuk production harus menggunakanr restriction origin seperti ini

//ini akan membuat semua origin bisa melakukan request, hanya digunakan saat development
app.use(cors());

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
