const express = require("express");
const employees = require("../routes/employees");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());

  app.use("/api/employees/", employees);

  app.use(error);
};
