connection = require("./../dbConnection.js");

class StudentModel {

    constructor() {};

    getAll() {
        const sql = "SELECT * FROM Student";
        connection.query(sql,(error, results)=>{
            if (error) throw err;
            console.log(results);
            return results;
        });
    };
    
}


module.exports = new StudentModel();




