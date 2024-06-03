const StudentController = require('@student-module/controllers/student.controller.js');

module.exports = (app) => {
  const studentController = new StudentController();

  app.group('/student', (router) => {
    router.route('/')
      .get(studentController.getAll)
      .post(studentController.create);

    router.route('/:id')
      .get(studentController.getById)
      .delete(studentController.delete)
      .put(studentController.update);
  });
};
