connection = require("../dbConnection.js");
resultManager = require("./result.manager.js");
const Student = require("../class/student.js");

class StudentModel {

    constructor() {};

    updateStudent(id, data) {
        const sql = "UPDATE Student SET " + 
                    "email = ?, firstName = ?, " + 
                    "lastName = ?, birthDate = ?, birthPlace = ?, address = ?, class = ? " + 
                    "WHERE id = ?";

        var asyncRequest = new Promise((resolve, reject) => {
            let student = new Student(id, data.email, data.first_name, data.last_name, data.birth_place, data.birth_date, data.class_group, data.address);
            connection.query(sql, [student.getEmail(), student.getFirstName(), student.getLastName(), student.getBirthDate(), student.getBirthPlace(), student.getAddress(), student.getClassGroup(), id] ,(error, results)=>{
                if (error) {
                    reject(error);
                } ;
                
                return resolve(results);
            });
          });
        return asyncRequest;
    }

    getAll() {
        const sql = "SELECT * FROM Student";
        var asyncRequest = new Promise((resolve, reject) => {
            connection.query(sql,(error, results)=>{
                if (error) {
                    reject(error);
                } ;
                return resolve(resultManager.formatResults(results));
            });
          });
        return asyncRequest;
        
    };

    getById(id) {
        const sql = "SELECT * FROM Student WHERE id = " + id;
        var asyncRequest = new Promise((resolve, reject)=>{
            connection.query(sql, (error, results)=>{
                if (error) reject(error);
                let data = resultManager.formatResults(results)[0];
                const student = new Student(data.id, data.email, data.firstName, data.lastName, data.birthDate, data.birthPlace, data.class_group, data.address);
                
                resolve(student);
            });
        });
        return asyncRequest;
    }
    
}


module.exports = new StudentModel();




