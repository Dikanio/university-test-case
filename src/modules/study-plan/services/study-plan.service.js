const {StudyPlanModel, StudentModel, SubjectModel} = require("@common-module/models/association.model");
const { responseInternalServerError, responseBadRequest, responseNotFoundError, responseSuccess } = require('@lib-response/response');
const BadRequestError = require('@lib-error/bad.request.error');
const Validator = require('validatorjs');
const { Op } = require('sequelize');

class StudyPlanService {
  constructor() {
    
  }

  async getAll(query) {
    const result = await StudyPlanModel.findAll({
      include: [
        {
          model: StudentModel,
          required: true
        },
        {
          model: SubjectModel,
          required: true
        }
      ]
    });
    const response = this.studyPlanMapper(result)
    
    return responseSuccess(response)
  }

  async create(data) {
    const validator = new Validator(data, {
      student_id: 'required|numeric',
      subject_id: 'required|numeric',
      semester: 'required|numeric',
      score: 'nullable|numeric'
    });

    if (validator.check() === false) {
      throw new BadRequestError(validator.errors.all())
    }

    let checkExist = await StudyPlanModel.findOne({
      where: {
        student_id: data.student_id,
        subject_id: data.subject_id
      }
    })

    if (checkExist) throw new BadRequestError(null, "Student already take this subject");

    let countStudent = await StudyPlanModel.count({
      where: {
        student_id: data.student_id
      }
    })
    
    if (countStudent >= 3) throw new BadRequestError(null, "Student already takes 3 subject");

    let countSubject = await StudyPlanModel.count({
      where: {
        subject_id: data.subject_id
      }
    })

    if (countSubject >= 4) throw new BadRequestError(null, "Subject cannot be taken by more than 4 student");

    let result = await StudyPlanModel.create(data);

    return responseSuccess(result)
  }

  async update(data, id) {
    const validator = new Validator(data, {
      student_id: 'required|numeric',
      subject_id: 'required|numeric',
      semester: 'required|numeric',
      score: 'nullable|numeric'
    });

    if (validator.check() === false) {
      throw new BadRequestError(validator.errors.all())
    }

    let countStudent = await StudyPlanModel.count({
      where: {
        student_id: data.student_id
      }
    })

    if (countStudent > 3) throw new BadRequestError(null, "Student already takes 3 subject");

    let countSubject = await StudyPlanModel.count({
      where: {
        subject_id: data.subject
      }
    })

    if (countSubject > 4) throw new BadRequestError(null, "Subject cannot be taken by more than 4 student");

    let result = await StudyPlanModel.update(data, {
      where: {
        id
      }
    });

    return responseSuccess(null)
  }

  async getById(id) {
    const result = await StudyPlanModel.findOne({
      where: {
        id
      },
      include: [
        {
          model: StudentModel,
          required: true
        },
        {
          model: SubjectModel,
          required: true
        }
      ]
    });
    const response = this.studyPlanMapper([result])
    return responseSuccess(response)
  }

  async delete(id) {
    const result = await StudyPlanModel.destroy({
      where: {
        id
      }
    });
    return responseSuccess(null)
  }

  studyPlanMapper(studyPlan) {
    return studyPlan.map((item) => {
      return {
        id: item.id,
        semester: item.semester,
        subject: {
          id: item.SubjectModel.id,
          name: item.SubjectModel.name,
          code: item.SubjectModel.code
        },
        student: {
          id: item.StudentModel.id,
          name: item.StudentModel.name,
          major: item.StudentModel.major
        }
      }
    })
  }
}

module.exports = StudyPlanService