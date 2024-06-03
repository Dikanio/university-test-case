const { sequelize, Sequelize } = require('@common-module/models/db')
const StudentModel = require("@student-module/models/student.model");
const SubjectModel = require("@subject-module/models/subject.model");
const StudyPlanModel = require("@study-plan-module/models/study-plan.model");


StudentModel.hasMany(StudyPlanModel, { foreignKey: 'student_id' });
StudyPlanModel.belongsTo(StudentModel, { foreignKey: 'student_id' });

SubjectModel.hasMany(StudyPlanModel, { foreignKey: 'subject_id' });
StudyPlanModel.belongsTo(SubjectModel, { foreignKey: 'subject_id' });

module.exports = {
  sequelize,
  StudentModel,
  SubjectModel,
  StudyPlanModel
};