const { sequelize, Sequelize } = require('@common-module/models/db')
const {Model} = require("sequelize");
const InternalServerError = require('@lib-error/internal.server.error');

class StudentModel extends Model {
}

StudentModel.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
  },
  nim: {
    type: Sequelize.STRING
  },
  major: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  tableName: "mahasiswa",
  modelName: 'StudentModel',
  updatedAt: 'updated_at',
  createdAt: 'created_at'
})

module.exports = StudentModel
