/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modele', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    marque: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    categorie: {
      type: DataTypes.STRING(50),
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
    tableName: 'modele'
  });
};
