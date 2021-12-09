const mongoose = require("mongoose");
const config = require("config");
const { Employee } = require("./model/employee");

const db = config.get("db");
mongoose
  .connect(db)
  .then(() => console.log(`Connected to ${db} database..`))
  .catch((err) =>
    console.log(`Could not connect to the database. ${err.message}`)
  );

const employees = [
  {
    name: "Djordje",
    email_address: "djole@gmail.com",
    phone_number: "1234567",
    home_address: {
      city: "Beograd",
      zip_code: "11000",
      address_1: "Sumatovacka 105",
      address_2: "Topolska 5",
    },
    date_of_birth: "1991/09/03",
  },
  {
    name: "Nikola",
    email_address: "nik@gmail.com",
    phone_number: "1234567",
    home_address: {
      city: "Beograd",
      zip_code: "11000",
      address_1: "Sumatovacka 105",
    },
    date_of_birth: "1989/12/03",
  },
  {
    name: "Sanja",
    email_address: "sanja@gmail.com",
    phone_number: "1234567",
    home_address: {
      city: "Beograd",
      zip_code: "11000",
      address_1: "Sumatovacka 105",
    },
    date_of_birth: "1963/06/18",
  },
  {
    name: "Milan",
    email_address: "milan@gmail.com",
    phone_number: "1234567",
    home_address: {
      city: "Beograd",
      zip_code: "11000",
      address_1: "Trnska 10",
    },
    date_of_birth: "1963/06/18",
  },
  {
    name: "Jovan",
    email_address: "jovan@gmail.com",
    phone_number: "1234567",
    home_address: {
      city: "Beograd",
      zip_code: "11000",
      address_1: "Dobracina 5",
    },
    date_of_birth: "1963/06/18",
  },
  {
    name: "Luka",
    email_address: "luka@gmail.com",
    phone_number: "1234567",
    home_address: {
      city: "Beograd",
      zip_code: "11000",
      address_1: "Cerska 4",
    },
    date_of_birth: "1963/06/18",
  },
  {
    name: "Milica",
    email_address: "milica@gmail.com",
    phone_number: "1234567",
    home_address: {
      city: "Beograd",
      zip_code: "11000",
      address_1: "Jevremova 10",
    },
    date_of_birth: "1963/06/18",
  },
  {
    name: "Jelena",
    email_address: "jelena@gmail.com",
    phone_number: "1234567",
    home_address: {
      city: "Beograd",
      zip_code: "11000",
      address_1: "Dubljanska 6",
    },
    date_of_birth: "1963/06/18",
  },
  {
    name: "Jovana",
    email_address: "jovana@gmail.com",
    phone_number: "1234567",
    home_address: {
      city: "Beograd",
      zip_code: "11000",
      address_1: "Timocka 10",
    },
    date_of_birth: "1963/06/18",
  },
  {
    name: "Stefan",
    email_address: "stefan@gmail.com",
    phone_number: "1234567",
    home_address: {
      city: "Beograd",
      zip_code: "11000",
      address_1: "Karnegijeva 9",
    },
    date_of_birth: "1963/06/18",
  },
  {
    name: "Kosta",
    email_address: "kosta@gmail.com",
    phone_number: "1234567",
    home_address: {
      city: "Beograd",
      zip_code: "11000",
      address_1: "Sumatovacka 10",
    },
    date_of_birth: "1963/06/18",
  },
];

async function populateDb() {
  await Employee.deleteMany();
  await Employee.insertMany(employees);
  console.log("Data inserted to database.");
}

populateDb();
