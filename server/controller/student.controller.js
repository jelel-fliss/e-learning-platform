const app = require("./../app.js");

app.get("/students", (req, res) => {
    all_students = studentModel.getAll();
    res.send(all_students);
  });