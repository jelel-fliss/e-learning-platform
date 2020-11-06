/** Database Environment */
const database = require("./dbConnection.js");

/** Express */
const cors = require("cors");
const express = require('express');
const bodyParser = require("body-parser");

const app = express();

/** Connecting to Database */

database.connect(err => {
  if (err) throw err;
  console.log("Connected to database !");
});

/** Dependencies **/ 

app.use(cors());
app.use(bodyParser.json());

/** Routes */

require('./controller/student.controller.js')(app);


app.listen(8000, () => {
  console.log("Server running on port 8000");
});



