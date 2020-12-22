const mysql = require("mysql");

const database_connection = mysql.createConnection({
    host: "localhost:3306",
    user: "root",
    password: "root",
    database: "cll"
  });

module.exports = database_connection;
