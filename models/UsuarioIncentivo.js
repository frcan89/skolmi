// models/UsuarioIncentivo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Incentivo = require('./Incentivo');

const UsuarioIncentivo = sequelize.define('UsuarioIncentivo', {
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
  incentivo: {
    type: DataTypes.INTEGER,
    references: {
      model: Incentivo,
      key: 'id'
    }
  },
  fechaAsignacion: {
    type: DataTypes.DATE,
    allowNull: false
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  tableName: 'UsuarioIncentivo',
  timestamps: false
});

UsuarioIncentivo.belongsTo(Usuario, { foreignKey: 'usuario' });
UsuarioIncentivo.belongsTo(Incentivo, { foreignKey: 'incentivo' });

module.exports = UsuarioIncentivo;
