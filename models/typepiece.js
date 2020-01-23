/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('typepiece', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    libelle: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    est_renouvelable: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'typepiece'
  });
};
