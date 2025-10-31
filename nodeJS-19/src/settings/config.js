const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const { StatusCodes } = require("http-status-codes");
const responseFormatter = require("../middleware/responseFormatter.js");
const tasksRouter = require("../tasks/tasks.router.js");
const authRouter = require("../auth/auth.router.js");
const usersRouter = require("../users/users.router.js");
const expressWinstonLogger = require("../middleware/expressWinston.middleware.js");

function configureApp(app) {
  /* 
  const corsOptions = {
  origin: ["example.com", "example2.com"],
  };
  */

  app.use(cors());

  let accesLogStream = fs.createWriteStream(
    path.join(__dirname, "../..", "access.log"),
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
}

module.exports = configureApp;
