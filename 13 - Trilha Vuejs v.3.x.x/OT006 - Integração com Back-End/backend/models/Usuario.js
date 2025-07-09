const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Usuario = db.define('Usuario', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  senha: { type: DataTypes.STRING }
});

module.exports = Usuario;
