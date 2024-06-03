const StudyPlanService = require("@study-plan-module/services/study-plan.service");

class StudyPlanController {  
  constructor() {
    this.studyPlanService = new StudyPlanService();
    this.getById = this.getById.bind(this);
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getById(request, response, next) {
    try {
      const result = await this.studyPlanService.getById(request.params.id)

      response.status(result.httpCode)
      response.send(result.error || result.data) 
    } catch (error) {
      next(error)
    }
  }

  async getAll(request, response, next) {
    try {
      const result = await this.studyPlanService.getAll(request.query)

      response.status(result.httpCode)
      response.send(result.error || result.data) 
    } catch (error) {
      next(error)
    }
  }

  async create(request, response, next) {
    try {
      const result = await this.studyPlanService.create(request.body)
      
      response.status(result.httpCode)
      response.send(result.error || result.data) 
    } catch (error) {
      next(error)
    }
  }

  async update(request, response, next) {
    try {
      const result = await this.studyPlanService.update(request.body, request.params.id)
      
      response.status(result.httpCode)
      response.send(result.error || result.data) 
    } catch (error) {
      next(error)
    }
  }

  async delete(request, response, next) {
    try {
      const result = await this.studyPlanService.delete(request.params.id)
      
      response.status(result.httpCode)
      response.send(result.error || result.data) 
    } catch (error) {
      next(error)
    }
  }
}
module.exports = StudyPlanController;
