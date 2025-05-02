const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Student = require('./student');

const Memo = sequelize.define('Memo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: 'id',
    },
  },
  memoText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  dateIssued: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  }
}, {
  timestamps: true,
});

Student.hasMany(Memo, { foreignKey: 'studentId' });
Memo.belongsTo(Student, { foreignKey: 'studentId' });

module.exports = Memo;
