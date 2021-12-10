const moment = require("moment");

function dateEmployment(request) {
  if (request.body.date_of_employment !== undefined) {
    let timestamp = Date.parse(request.body.date_of_employment);
    return moment(timestamp).format("YYYY-MM-DD");
  }
  return moment().format("YYYY-MM-DD");
}

function dateBirth(request) {
  let timestamp = Date.parse(request.body.date_of_birth);
  return moment(timestamp).format("YYYY-MM-DD");
}

module.exports = {
  dateEmployment,
  dateBirth,
};
