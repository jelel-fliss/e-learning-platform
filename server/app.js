const database = require("./dbConnection.js");

const cors = require("cors");
const express = require('express');

const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(8000, () => {
  console.log("Server running on port 8000");
});

database.connect(err => {
  if (err) throw err;
  console.log("Connected to database !");
});


module.exports = app;

