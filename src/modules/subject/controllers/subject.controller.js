const SubjectService = require("@subject-module/services/subject.service");

class SubjectController {  
  constructor() {
    this.subjectService = new SubjectService();
    this.getById = this.getById.bind(this);
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getById(request, response, next) {
    try {
      const result = await this.subjectService.getById(request.params.id)

      response.status(result.httpCode)
      response.send(result.error || result.data) 
    } catch (error) {
      next(error)
    }
  }

  async getAll(request, response, next) {
    try {
      const result = await this.subjectService.getAll(request.query)

      response.status(result.httpCode)
      response.send(result.error || result.data) 
    } catch (error) {
      next(error)
    }
  }

  async create(request, response, next) {
    try {
      const result = await this.subjectService.create(request.body)
      
      response.status(result.httpCode)
      response.send(result.error || result.data) 
    } catch (error) {
      next(error)
    }
  }

  async update(request, response, next) {
    try {
      const result = await this.subjectService.update(request.body, request.params.id)
      
      response.status(result.httpCode)
      response.send(result.error || result.data) 
    } catch (error) {
      next(error)
    }
  }

  async delete(request, response, next) {
    try {
      const result = await this.subjectService.delete(request.params.id)
      
      response.status(result.httpCode)
      response.send(result.error || result.data) 
    } catch (error) {
      next(error)
    }
  }
}
module.exports = SubjectController;
