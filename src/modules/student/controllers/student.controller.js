const StudentService = require("@student-module/services/student.service");

class StudentController {  
  constructor() {
    this.studentService = new StudentService();
    this.getById = this.getById.bind(this);
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getById(request, response, next) {
    try {
      const result = await this.studentService.getById(request.params.id)

      response.status(result.httpCode)
      response.send(result.error || result.data) 
    } catch (error) {
      next(error)
    }
  }

  async getAll(request, response, next) {
    try {
      const result = await this.studentService.getAll(request.query)

      response.status(result.httpCode)
      response.send(result.error || result.data) 
    } catch (error) {
      next(error)
    }
  }

  async create(request, response, next) {
    try {
      const result = await this.studentService.create(request.body)
      
      response.status(result.httpCode)
      response.send(result.error || result.data) 
    } catch (error) {
      next(error)
    }
  }

  async update(request, response, next) {
    try {
      const result = await this.studentService.update(request.body, request.params.id)
      
      response.status(result.httpCode)
      response.send(result.error || result.data) 
    } catch (error) {
      next(error)
    }
  }

  async delete(request, response, next) {
    try {
      const result = await this.studentService.delete(request.params.id)
      
      response.status(result.httpCode)
      response.send(result.error || result.data) 
    } catch (error) {
      next(error)
    }
  }
}
module.exports = StudentController;
