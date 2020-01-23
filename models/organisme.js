/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organisme', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    type_organisme: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'typeorganisme',
        key: 'id'
      }
    },
    code_createur: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    code_modificateur: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    date_creation: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_modification: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    statut: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'statut',
        key: 'id'
      }
    }
  }, {
    tableName: 'organisme'
  });
};
