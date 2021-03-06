const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const db = config.get("db");
  mongoose
    .connect(db)
    .then(() => console.log(`Connected to ${db} database..`))
    .catch((err) =>
      console.log(`Could not connect to the database. ${err.message}`)
    );
};
