const mysql = require("mysql");

const database_connection = mysql.createConnection({
    host: "db",
    user: "root",
    password: "root",
    database: "cll"
  });

module.exports = database_connection;