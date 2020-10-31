/** Database Environment */
const database = require("./dbConnection.js");

/** Express */
const cors = require("cors");
const express = require('express');
const bodyParser = require("body-parser");

const app = express();

/** Router */
const router = express.Router();

/** Controllers */
const studentController = require('./controller/student.controller.js');

/** Connecting to Database */

database.connect(err => {
  if (err) throw err;
  console.log("Connected to database !");
});

/** Student Routes **/ 

// GET All Students Route.
router.get('/students/all', (request, response) => {
  studentController.all_students_list(request, response);
});

app.use(cors());
app.use(bodyParser.json());
app.use("/", router);


app.listen(8000, () => {
  console.log("Server running on port 8000");
});



