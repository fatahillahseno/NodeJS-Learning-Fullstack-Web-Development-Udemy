const express = require("express");
const authController = require("./auth.controller.js");
const { StatusCodes } = require("http-status-codes");
const loginValidator = require("./validators/login.validator.js");
const { validationResult } = require("express-validator");

const authRouter = express.Router();

/**
 * @swagger
 *
 * /auth/login:
 *  post:
 *    summary: User log in
 *    tags: [Authentication]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Login'
 *    responses:
 *      200:
 *        description: User login successful
 *        content:
 *           application/json:
 *             example:
 *               status: success
 *               statusCode: 200
 *               message: OK
 *               data:
 *                 accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2OTA1YTcwYjMwMzUwNDdiOWQyZDc0OGUiLCJlbWFpbCI6ImpvaG5AZG9lLmNvbSIsImlhdCI6MTc2MjQwMjkxMCwiZXhwIjoxNzYyNDg5MzEwfQ.58JrgfJBjbJKSrDdZEfz1lz14OjkdPckYLLGXXakr6U
 */

authRouter.post("/login", loginValidator, (req, res) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    return authController.handleLogin(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});

module.exports = authRouter;

/**
 * @swagger
 *
 * components:
 *  schemas:
 *    Login:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          description: A valid email address.
 *        password:
 *          type: string
 *          description: The password must contain 8 characters and also a number, a capital letter, and a special character.
 *      example:
 *       email: john@doe.com
 *       password: Password1234#
 */
