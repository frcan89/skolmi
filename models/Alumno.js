// models/Alumno.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Referido = require('./Referido');

const Alumno = sequelize.define('Alumno', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  referido: {
    type: DataTypes.INTEGER,
    references: {
      model: Referido,
      key: 'id'
    }
  },
  tipoEducacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipoIdentificacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numeroIdentificacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sexo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  celular: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fechaNacimiento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  municipio: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Alumnos',
  timestamps: false
});

Alumno.belongsTo(Usuario, { foreignKey: 'usuario' });
Alumno.belongsTo(Referido, { foreignKey: 'referido' });

module.exports = Alumno;
