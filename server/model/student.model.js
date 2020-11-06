connection = require("./../dbConnection.js");
resultManager = require("./result.manager.js");

class StudentModel {

    constructor() {};

    getAll() {
        const sql = "SELECT * FROM Student";
        connection.query(sql,(error, results)=>{
            if (error) throw err;
            return resultManager.formatResults(results);
        });
    };

    getById(id) {
        const sql = "SELECT * FROM Student WHERE id = " + id;
        connection.query(sql, (error, results)=>{
            if (error) throw err;
            
            return resultManager.formatResults(results)[0];
        })
    }
    
}


module.exports = new StudentModel();




