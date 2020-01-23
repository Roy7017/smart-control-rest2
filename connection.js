const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

database = 'control';
username = 'root'
password = '';
const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'mysql',

});

const controlleur = require("./models/controlleur")(sequelize, DataTypes);
const enregistreur = require("./models/enregistreur")(sequelize, DataTypes);
const modele = require("./models/modele")(sequelize, DataTypes);
const organisme = require("./models/organisme")(sequelize, DataTypes);
const piece_invalide = require("./models/pieceinvalide")(sequelize, DataTypes);
const piece = require("./models/piece")(sequelize, DataTypes);
const type_organisme = require("./models/typeorganisme")(sequelize, DataTypes);
const type_piece = require("./models/typepiece")(sequelize, DataTypes);
const vehicule = require("./models/vehicule")(sequelize, DataTypes);
const controle = require("./models/controle")(sequelize, DataTypes);
const statut = require("./models/statut")(sequelize, DataTypes);

modele.hasMany(vehicule, { foreignKey: 'model', as: 'Vehicule' });
vehicule.belongsTo(modele, { foreignKey: 'model', as: 'Modele' });

type_organisme.hasMany(organisme, { foreignKey: 'type_organisme', as: 'Organisme' });
organisme.belongsTo(type_organisme, { foreignKey: 'type_organisme', as: 'TypeOrganisme' });

type_piece.hasMany(piece, { foreignKey: 'type_piece', as: 'Piece' });
piece.belongsTo(type_piece, { foreignKey: 'type_piece', as: 'TypePiece' });

vehicule.hasMany(piece, { foreignKey: 'vehicule', as: 'Piece' });
piece.belongsTo(vehicule, { foreignKey: 'vehicule', as: 'Vehicule' });

organisme.hasMany(piece, { foreignKey: 'provenance', as: 'Piece' });
piece.belongsTo(organisme, { foreignKey: 'provenance', as: 'Organisme' });

controlleur.hasMany(controle, { foreignKey: 'controlleur', as: 'Controle' });
controle.belongsTo(controlleur, { foreignKey: 'controlleur', as: 'Controlleur' });

controle.hasMany(piece_invalide, { foreignKey: 'controle', as: 'PieceInvalide' });
piece_invalide.belongsTo(controle, { foreignKey: 'controle', as: 'Controle' });

piece_invalide.belongsTo(piece, { foreignKey: 'piece', as: 'Piece' });

statut.hasMany(piece_invalide, { foreignKey: 'statut', as: 'PieceInvalide' });
piece_invalide.belongsTo(statut, { foreignKey: 'statut', as: 'Statut' });

statut.hasMany(controle, { foreignKey: 'statut', as: 'Controle' });
controle.belongsTo(statut, { foreignKey: 'statut', as: 'Statut' });

statut.hasMany(controlleur, { foreignKey: 'statut', as: 'Controlleur' });
controlleur.belongsTo(statut, { foreignKey: 'statut', as: 'Statut' });

statut.hasMany(enregistreur, { foreignKey: 'statut', as: 'Enregistreur' });
enregistreur.belongsTo(statut, { foreignKey: 'statut', as: 'Statut' });

statut.hasMany(modele, { foreignKey: 'statut', as: 'Modele' });
modele.belongsTo(statut, { foreignKey: 'statut', as: 'Statut' });

statut.hasMany(vehicule, { foreignKey: 'statut', as: 'Vehicule' });
vehicule.belongsTo(statut, { foreignKey: 'statut', as: 'Statut' });

statut.hasMany(organisme, { foreignKey: 'statut', as: 'Organisme' });
organisme.belongsTo(statut, { foreignKey: 'statut', as: 'Statut' });

statut.hasMany(piece, { foreignKey: 'statut', as: 'Piece' });
piece.belongsTo(statut, { foreignKey: 'statut', as: 'Statut' });

statut.hasMany(type_organisme, { foreignKey: 'statut', as: 'TypeOrganisme' });
type_organisme.belongsTo(statut, { foreignKey: 'statut', as: 'Statut' });

statut.hasMany(type_piece, { foreignKey: 'statut', as: 'TypePiece' });
type_piece.belongsTo(statut, { foreignKey: 'statut', as: 'Statut' });

sequelize
    .authenticate()
    .then(() => {
        console.log('connexion etablie.');
    })
    .catch(err => {
        console.error('erreur lors de ma connexion :', err);
    });

module.exports = {
    Sequelize,
    sequelize,
    piece,
    piece_invalide,
    type_organisme,
    vehicule,
    type_piece,
    organisme,
    modele,
    enregistreur,
    controlleur,
    statut,
    controle
};