const StudentModel = require("@student-module/models/student.model");
const { responseInternalServerError, responseBadRequest, responseNotFoundError, responseSuccess } = require('@lib-response/response');
const BadRequestError = require('@lib-error/bad.request.error');
const Validator = require('validatorjs');
const { Op } = require('sequelize');

class StudentService {
  constructor() {
    
  }

  async getAll(query) {
    const result = await StudentModel.findAll();
    return responseSuccess(result)
  }

  async create(data) {
    const validator = new Validator(data, {
      name: 'required',
      nim: 'required',
      major: 'required'
    });

    if (validator.check() === false) {
      throw new BadRequestError(validator.errors.all())
    }

    let checkNimExist = await StudentModel.findOne({
      where: {
        nim: data.nim
      }
    })

    if (checkNimExist) throw new BadRequestError(null, "NIM already used");

    let result = await StudentModel.create(data);

    return responseSuccess(result)
  }

  async update(data, id) {
    const validator = new Validator(data, {
      name: 'required',
      nim: 'required',
      major: 'required'
    });

    if (validator.check() === false) {
      throw new BadRequestError(validator.errors.all())
    }

    let checkNimExist = await StudentModel.findOne({
      where: {
        nim: data.nim,
        id: {
          [Op.ne]: id
        }
      }
    })

    if (checkNimExist) throw new BadRequestError(null, "NIM already used");

    let result = await StudentModel.update(data, {
      where: {
        id
      }
    });

    return responseSuccess(null)
  }

  async getById(id) {
    const result = await StudentModel.findOne({
      where: {
        id
      }
    });
    return responseSuccess(result)
  }

  async delete(id) {
    const result = await StudentModel.destroy({
      where: {
        id
      }
    });
    return responseSuccess(null)
  }
}

module.exports = StudentService