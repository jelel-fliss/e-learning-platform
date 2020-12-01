const studentModel = require("./../model/student.model.js");

// GET All Students Route.


module.exports = (app) => {


  app.get('/students/all', (request, response) => {
    studentModel.getAll().then((data)=>{
      response.send(data);
    });
    
  });

  app.get('/student/:id', (request,response) => {
    
    studentModel.getById(request.params.id).then((student)=>{
      response.send(student);
    });
  });

  app.put('/student/:id', (request, response) => {
    studentModel.updateStudent(request.params.id,request.body).then((result)=>{
      
      response.send(result);
    });
  });

  //other routes..
}
