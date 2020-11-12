const mysql = require("mysql");

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "cll"
  });

module.exports = database;