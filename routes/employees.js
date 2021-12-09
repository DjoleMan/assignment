const express = require("express");
const router = express.Router();
const { Employee, validate } = require("../model/employee");
const validateId = require("../middleware/validateId");

router.get("/", async (req, res) => {
  const pageSize = parseInt(req.query.pageSize);
  const pageNumber = parseInt(req.query.pageNumber);

  const employees = await Employee.find()
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);
  if (employees.length === 0) return res.send("No employees in database.");
  res.send(employees);
});

router.get("/:id", validateId, async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) return res.status(400).send("Invalid id.");
  res.send(employee);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(401).send(error.details[0].message);

  let employee = new Employee({
    name: req.body.name,
    email_address: req.body.email_address,
    phone_number: req.body.phone_number,
    home_address: {
      city: req.body.home_address.city,
      zip_code: req.body.home_address.zip_code,
      address_1: req.body.home_address.address_1,
      address_2: req.body.home_address.address_2,
    },
    date_of_employmnet: req.body.date_of_employmnet,
    date_of_birth: req.body.date_of_birth,
  });
  employee = await employee.save();
  res.send(employee);
});

router.put("/:id", validateId, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(401).send(error.details[0].message);

  const employee = await Employee.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email_address: req.body.email_address,
      phone_number: req.body.phone_number,
      home_address: {
        city: req.body.home_address.city,
        zip_code: req.body.home_address.zip_code,
        address_1: req.body.home_address.address_1,
        address_2: req.body.home_address.address_2,
      },
      date_of_employmnet: req.body.date_of_employmnet,
      date_of_birth: req.body.date_of_birth,
    },
    { new: true }
  );
  if (!employee) return res.status(400).send("Invalid id");
  res.send(employee);
});

router.delete("/:id", validateId, async (req, res) => {
  const employee = await Employee.findByIdAndRemove(req.params.id);
  if (!employee) return res.status(400).send("Invalid id.");
  res.send(employee);
});

module.exports = router;
