const studentModel = require("./../model/student.model.js");

class StudentController {
    constructor() {};

    /** GET Method : All Students */
    all_students_list(request, response ) {
        const list = studentModel.getAll();
        response.send(list);
    }

}

module.exports = new StudentController();