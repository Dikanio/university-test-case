const { sequelize, Sequelize } = require('@common-module/models/db')
const {Model} = require("sequelize");
const InternalServerError = require('@lib-error/internal.server.error');

class SubjectModel extends Model {
}

SubjectModel.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
  },
  code: {
    type: Sequelize.STRING
  },
  sks: {
    type: Sequelize.INTEGER
  },
  semester: {
    type: Sequelize.INTEGER
  }
}, {
  sequelize,
  tableName: "mata_kuliah",
  modelName: 'SubjectModel',
  updatedAt: 'updated_at',
  createdAt: 'created_at'
})

module.exports = SubjectModel
