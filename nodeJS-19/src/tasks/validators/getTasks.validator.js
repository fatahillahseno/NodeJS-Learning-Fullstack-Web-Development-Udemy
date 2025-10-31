const { query } = require("express-validator");

const getTaskValidator = [
  query("limit", "limit must be a valid int")
    .optional()
    .isInt()
    .toInt({ min: 1 }),
  query("limit").customSanitizer((value, { req }) => {
    return value ? value : 5; // minimum data shown must be 5 datas
  }),
  query("page", "page must be a valid int")
    .optional()
    .isInt()
    .toInt({ min: 1 }),
  query("page").customSanitizer((value, { req }) => {
    return value ? value : 1; //minimum value page 1
  }),
  query("order", "order must be one of ['asc','dsc']")
    .optional()
    .isIn(["asc", "dsc"]),
  query("order").customSanitizer((value, { req }) => {
    return value ? value : "asc"; //default: ascending sort
  }),
];

module.exports = getTaskValidator;
