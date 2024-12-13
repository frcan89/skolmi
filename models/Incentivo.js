// models/Incentivo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Incentivo = sequelize.define('Incentivo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'Incentivos',
  timestamps: false
});

module.exports = Incentivo;
