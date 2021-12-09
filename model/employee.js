const mongoose = require("mongoose");
const Joi = require("joi");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  email_address: {
    type: String,
    required: true,
    min: 3,
    max: 100,
  },
  phone_number: {
    type: String,
    required: true,
    min: 6,
    max: 20,
  },
  home_address: {
    city: {
      type: String,
      required: true,
      min: 2,
      max: 85,
    },
    zip_code: {
      type: String,
      required: true,
      min: 5,
      max: 10,
    },
    address_1: {
      type: String,
      required: true,
      min: 4,
      max: 50,
    },
    address_2: {
      type: String,
      min: 4,
      max: 50,
    },
  },
  date_of_employment: {
    type: Date,
    default: Date.now,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

function validate(employee) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email_address: Joi.string().min(3).max(100).email().required(),
    phone_number: Joi.string().min(3).max(100).required(),
    home_address: Joi.object().keys({
      city: Joi.string().min(2).max(85).required(),
      zip_code: Joi.string().min(5).max(10).required(),
      address_1: Joi.string().min(4).max(50).required(),
      address_2: Joi.string().min(4).max(50),
    }),
    date_of_employment: Joi.date().raw(),
    date_of_birth: Joi.date().raw().required(),
  });
  return schema.validate(employee);
}

module.exports.Employee = Employee;
module.exports.validate = validate;
