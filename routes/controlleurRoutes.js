const controlleur = require("../models/controlleur");
const db = require("../connection");
var express = require('express');

var router = express.Router();

router.post('/controlleur/login', (req, res) => {
    console.log('\nendpoint\n');
    db.controlleur.findOne(
        {
            where: {
                matricule: req.body.matricule,
                password: req.body.password
            }
        }).then((controlleur) => {
            if (control) {
                /**
                 * Modifier pour avoir le token
                 */
                res.status(200).json(controlleur);
            } else {
                res.status(400).send({ err: "Aucun user de ce matricule" });
            }
        }).catch((err) => {
            res.send({ err: err })
        })
});

//controller une vehicule
router.get('/controlleur/controle/', (req, res) => {
    getPieces(req, res).then(array => {
        //If any piece invalide
        if (array.length > 0) {
            const flag = true;
            res.status(200).json({
                flag: flag,
                pieces_invalides: array
            });
        } else {
            const flag = false;
            res.status(200).json({ flag });
        }
    }).catch(err => res.status(400).send({ err }));

});

async function getPieces(req, res) {
    const array = [];

    //Get vehicule, pieces and controlleur
    const vehicule = await db.vehicule.findOne({ where: { immatriculation: req.body.matricule } });
    const pieces = await vehicule.getPieces();
    const controlleur = await db.controlleur.findByPk(req.body.idControlleur);

    //Create controle instance
    const controle = await db.controle.create({
        date: Date.now(),
        controlleur: 1,
        statut: 1 // active status.
    });

    //Set controlleur for the current controle
    await controle.setControlleur(controlleur);

    //Check all pieces of the vehicule
    pieces.forEach(piece => {
        if (Date.now() > Date.parse(piece.date_expiration)) {
            //array.push({ erreur: 'Date d\'expiration depasse', piece });
            const piece_invalide = await db.piece_invalide.create({
                piece: 1,
                controle: 1
            });
            await piece_invalide.setControle(controle);
            await piece_invalide.setPiece(piece);
            array.push(piece_invalide);
        }
    });

    return array;
}

module.exports = router;