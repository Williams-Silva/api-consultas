'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consulta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Consulta.belongsTo(models.Cliente, {foreignKey: 'ClienteId'});
      Consulta.belongsTo(models.Medico, {foreignKey: 'MedicoId'});
    }
  }
  Consulta.init({
    data: DataTypes.DATE,
    descricao: DataTypes.STRING,
    ClienteId: DataTypes.INTEGER,
    MedicoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Consulta',
  });
  return Consulta;
};