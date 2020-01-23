/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('piece', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date_delivrance: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_expiration: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    type_piece: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'typepiece',
        key: 'id'
      }
    },
    vehicule: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'vehicule',
        key: 'id'
      }
    },
    provenance: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'organisme',
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
    tableName: 'piece'
  });
};
