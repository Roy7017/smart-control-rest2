/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('vehicule', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    immatriculation: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    modele: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'modele',
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
    tableName: 'vehicule'
  });
};
