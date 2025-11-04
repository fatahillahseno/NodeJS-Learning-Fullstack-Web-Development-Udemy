const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.1.0",

    info: {
      title: "Task Manager API",
      version: "0.1.0",
      description:
        "API application made with express and documented with swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Seno",
        url: "https://sense.co.id",
        email: "seno@gmail.com",
      },
    },

    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: [path.join(__dirname, "..", "**/*.js")],
};

const specs = swaggerJSDoc(options);
module.exports = specs;
