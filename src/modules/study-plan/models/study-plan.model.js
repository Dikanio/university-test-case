const { sequelize, Sequelize } = require('@common-module/models/db')
const {Model} = require("sequelize");
const InternalServerError = require('@lib-error/internal.server.error');
const StudentModel = require("@student-module/models/student.model");
const SubjectModel = require("@subject-module/models/subject.model");

class StudyPlanModel extends Model {
}

StudyPlanModel.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  student_id: {
    type: Sequelize.INTEGER
  },
  subject_id: {
    type: Sequelize.INTEGER
  },
  semester: {
    type: Sequelize.INTEGER
  },
  score: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  tableName: "rencana_studi",
  modelName: 'StudyPlanModel',
  updatedAt: 'updated_at',
  createdAt: 'created_at'
})


module.exports = StudyPlanModel
