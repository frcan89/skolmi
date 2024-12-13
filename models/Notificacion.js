// models/Notificacion.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Notificacion = sequelize.define('Notificacion', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  mensaje: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fechaEnvio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  destinatario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipoUsuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idReferencia: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Notificaciones',
  timestamps: false
});

module.exports = Notificacion;
