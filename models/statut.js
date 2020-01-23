/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('statut', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    libelle: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'statut'
  });
};
