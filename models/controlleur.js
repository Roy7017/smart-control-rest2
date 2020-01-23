/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('controlleur', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    matricule: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    prenom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date_naissance: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sexe: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    adresse: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    tableName: 'controlleur'
  });
};
