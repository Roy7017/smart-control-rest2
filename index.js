const express = require('express');
const app = express();
const db = require('./connection');
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

const cors = require('cors');
const bodyParser = require("body-parser");

const controlleurRoutes = require('./routes/controlleurRoutes');

const PORT = process.env.PORT || 8080;

sequelize.sync({ force: true }).then(function () {
    /**
     * Listen on provided port, on all network interfaces.
     */

    //addData();   //Uncommemnt this line to modify addData() method to add dev data
    app.listen(PORT, function () {
        console.log('Express server listening on port 8080');
    });
    app.on('error', onError);
    app.on('listening', onListening);
});

function onError() {

    console.log("error");
}
function onListening() {

    console.log("listening");
}

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("app/public"));
app.use(controlleurRoutes);
app.get('/', (req, res) => {
    console.log('api');
    res.json({
        message: "It works"
    });
});

async function addData() {
    console.log('\nSaving data...\n');

    const statut1 = db.statut.build({
        libelle: 'active',
    });
    const statut2 = db.statut.build({
        libelle: 'inactive',
    });

    await statut1.save();
    await statut2.save();

    const controlleur = db.controlleur.build({
        //id: 5879,
        password: 'pass',
        matricule: 'matricule',
        nom: 'nom',
        sexe: 'm',
        statut: 2
    }, {
        include: [{
            model: db.statut,
            as: 'Statut'
        }]
    });
    //controlleur.setStatut(statut);

    const modele = db.modele.build({
        id: 2647
    })

    const vehicule = db.vehicule.build({
        id: 5475,
        immat: 'ce457ab'
    });

    const piece1 = db.piece.build({
        id: 4742,
        date_deliv: Date.now(),
        date_expir: Date.parse('06/13/2030')
    });

    const piece2 = db.piece.build({
        id: 4743,
        date_deliv: Date.now(),
        date_expir: Date.parse('12/01/2012')
    });


    // await modele.save();

    // await vehicule.save();
    // vehicule.setModele(modele);
    // console.log('\nVehicule saved \n');

    // await piece1.save();
    // piece1.setVehicule(vehicule);
    // console.log('\nPiece1 saved\n');

    // await piece2.save();
    // piece2.setVehicule(vehicule);
    // console.log('\nPiece2 saved\n');


    await controlleur.save();
    //statut.addControlleur(controlleur);
    controlleur.setStatut(statut1);
    console.log('\nControlleur saved\n');
}