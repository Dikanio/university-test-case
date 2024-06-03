const SubjectController = require('@subject-module/controllers/subject.controller.js');

module.exports = (app) => {
  const subjectController = new SubjectController();

  app.group('/subject', (router) => {
    router.route('/')
      .get(subjectController.getAll)
      .post(subjectController.create);

    router.route('/:id')
      .get(subjectController.getById)
      .delete(subjectController.delete)
      .put(subjectController.update);
  });
};
