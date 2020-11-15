const studentModel = require("./../model/student.model.js");

// GET All Students Route.


module.exports = function(app){

  app.get('/test', function(request, response){
    response.send("Test");
  });

  app.get('/students/all', function(request, response){
    studentModel.getAll().then((data)=>{
      response.send(data);
    });
    
  });

  app.get('/student/:id', function(request,response) {
    
    studentModel.getById(request.params.id).then((data)=>{
      response.send(data);
    });
  })

  //other routes..
}
