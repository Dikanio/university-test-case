const SubjectModel = require("@subject-module/models/subject.model");
const { responseInternalServerError, responseBadRequest, responseNotFoundError, responseSuccess } = require('@lib-response/response');
const BadRequestError = require('@lib-error/bad.request.error');
const Validator = require('validatorjs');
const { Op } = require('sequelize');

class SubjectService {
  constructor() {
    
  }

  async getAll(query) {
    const result = await SubjectModel.findAll();
    return responseSuccess(result)
  }

  async create(data) {
    const validator = new Validator(data, {
      name: 'required',
      code: 'required',
      sks: 'required|numeric',
      semester: 'required|numeric',
    });

    if (validator.check() === false) {
      throw new BadRequestError(validator.errors.all())
    }

    let checkCodeExist = await SubjectModel.findOne({
      where: {
        code: data.code
      }
    })

    if (checkCodeExist) throw new BadRequestError(null, "Subject Code already used");

    let result = await SubjectModel.create(data);

    return responseSuccess(result)
  }

  async update(data, id) {
    const validator = new Validator(data, {
      name: 'required',
      code: 'required',
      sks: 'required|numeric',
      semester: 'required|numeric',
    });

    if (validator.check() === false) {
      throw new BadRequestError(validator.errors.all())
    }

    let checkCodeExist = await SubjectModel.findOne({
      where: {
        code: data.code,
        id: {
          [Op.ne]: id
        }
      }
    })

    if (checkCodeExist) throw new BadRequestError(null, "Subject Code already used");

    let result = await SubjectModel.update(data, {
      where: {
        id
      }
    });

    return responseSuccess(null)
  }

  async getById(id) {
    const result = await SubjectModel.findOne({
      where: {
        id
      }
    });
    return responseSuccess(result)
  }

  async delete(id) {
    const result = await SubjectModel.destroy({
      where: {
        id
      }
    });
    return responseSuccess(null)
  }
}

module.exports = SubjectService