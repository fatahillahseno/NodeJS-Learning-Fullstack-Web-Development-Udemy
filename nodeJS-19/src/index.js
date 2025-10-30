const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const responseFormatter = require("./middleware/responseFormatter.js");
const { StatusCodes } = require("http-status-codes");
const cors = require("cors");
const tasksRouter = require("./tasks/tasks.router.js");
const authRouter = require("./auth/auth.router.js");
const usersRouter = require("./users/users.router.js");
const mongoose = require("mongoose");
const expressWinstonLogger = require("./middleware/expressWinston.middleware.js");
const dotenv = require("dotenv");

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const envFile = `.env.${process.env.NODE_ENV}`;

dotenv.config({
  path: envFile,
});

const app = express();
const port = parseInt(process.env.PORT);

app.use(express.json());

const corsOptions = {
  origin: ["example.com", "example2.com"],
};
app.use(cors());

let accesLogStream = fs.createWriteStream(
  path.join(__dirname, "..", "access.log"),
  {
    flags: "a",
  }
);
app.use(morgan("combined", { stream: accesLogStream }));
app.use(responseFormatter);
app.use(expressWinstonLogger);

app.use("/", tasksRouter);
app.use("/auth", authRouter);
app.use("/users", usersRouter);

app.use((req, res) => {
  res.status(StatusCodes.NOT_FOUND).json(null);
});

// async function that communicati with database
async function bootstrap() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      dbName: process.env.DATABASE_NAME,
    });

    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`App Listening to Port: ${port}`);
    });
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
}

bootstrap();
