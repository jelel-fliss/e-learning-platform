const studentModel = require("./../model/student.model.js");

// GET All Students Route.


module.exports = function(app){

  app.get('/students/all', function(request, response){
    const list = studentModel.getAll();
    response.send(list);
  });

  app.get('/student/:id', function(request,response) {
    
    response.send(JSON.stringify(studentModel.getById(request.params.id)));
  })

  //other routes..
}
