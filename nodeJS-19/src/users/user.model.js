const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
    maxLength: [100, "First name cannot be more than 100 characters"],
  },
  lastName: {
    type: String,
    required: false,
    trim: true,
    maxLength: [100, "Last name cannot be more than 100 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
      },
      message: () => `Please enter valid email address`,
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const User = model("User", userSchema);

module.exports = User;

/**
 * @swagger
 *
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - firstName
 *        - email
 *        - password
 *      properties:
 *        firstName:
 *          type: string
 *          description: The first name the user.
 *          maxLength: 100
 *        lastName:
 *          type: string
 *          description: The last name the user.
 *          maxLength: 100
 *        email:
 *          type: string
 *          description: A valid email address.
 *        password:
 *          type: string
 *          description: The password must contain 8 characters and also a number, a capital letter, and a special character.
 *      example:
 *       firstName: John
 *       lastName: Doe
 *       email: john@doe.com
 *       password: Password1234#
 */
