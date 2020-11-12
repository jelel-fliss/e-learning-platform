connection = require("./../dbConnection.js");
resultManager = require("./result.manager.js");

class StudentModel {

    constructor() {};

    getAll() {
        const sql = "SELECT * FROM Student";
        var asyncRequest = new Promise(function(resolve, reject){
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
                
                resolve(resultManager.formatResults(results)[0]);
            });
        });
        return asyncRequest;
    }
    
}


module.exports = new StudentModel();




