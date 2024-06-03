const StudyPlanController = require('@study-plan-module/controllers/study-plan.controller.js');

module.exports = (app) => {
  const studyPlanController = new StudyPlanController();

  app.group('/study-plan', (router) => {
    router.route('/')
      .get(studyPlanController.getAll)
      .post(studyPlanController.create);

    router.route('/:id')
      .get(studyPlanController.getById)
      .delete(studyPlanController.delete)
      .put(studyPlanController.update);
  });
};
