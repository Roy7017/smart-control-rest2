/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pieceinvalide', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    piece: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'piece',
        key: 'id'
      }
    },
    controle: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'controle',
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
    tableName: 'pieceinvalide'
  });
};
