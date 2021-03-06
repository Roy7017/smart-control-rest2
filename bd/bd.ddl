CREATE TABLE controle (id int(10) NOT NULL AUTO_INCREMENT, `date` datetime NOT NULL, controlleur int(10) NOT NULL, code_createur varchar(20), code_modificateur varchar(20), date_creation date, date_modification date, statut int(10) NOT NULL, PRIMARY KEY (id));
CREATE TABLE controlleur (id int(10) NOT NULL AUTO_INCREMENT, matricule varchar(20) NOT NULL, nom varchar(50) NOT NULL, prenom varchar(50), date_naissance date, sexe varchar(5) NOT NULL, adresse varchar(255), code_createur varchar(20), code_modificateur varchar(20), date_creation date, date_modification date, statut int(10) NOT NULL, PRIMARY KEY (id));
CREATE TABLE enregistreur (id int(10) NOT NULL AUTO_INCREMENT, matricule varchar(20) NOT NULL, grade varchar(10), nom varchar(50) NOT NULL, prenom varchar(50), sexe varchar(5) NOT NULL, date_naissance date, code_createur varchar(20), code_modificateur varchar(20), date_creation date, date_modification date, statut int(10) NOT NULL, PRIMARY KEY (id));
CREATE TABLE modele (id int(10) NOT NULL AUTO_INCREMENT, marque varchar(25), description varchar(255), categorie varchar(50), code_createur varchar(20), code_modificateur varchar(20), date_creation date, date_modification date, statut int(10) NOT NULL, PRIMARY KEY (id));
CREATE TABLE organisme (id int(10) NOT NULL AUTO_INCREMENT, nom varchar(50) NOT NULL, contact varchar(50), type_organisme int(10) NOT NULL, code_createur varchar(20), code_modificateur varchar(20), date_creation date, date_modification date, statut int(10) NOT NULL, PRIMARY KEY (id));
CREATE TABLE piece (id int(10) NOT NULL AUTO_INCREMENT, date_delivrance date NOT NULL, date_expiration date NOT NULL, type_piece int(10) NOT NULL, vehicule int(10) NOT NULL, provenance int(10) NOT NULL, code_createur varchar(20), code_modificateur varchar(20), date_creation date, date_modification date, statut int(10) NOT NULL, PRIMARY KEY (id));
CREATE TABLE pieceInvalide (id int(10) NOT NULL AUTO_INCREMENT, piece int(10) NOT NULL, controle int(10) NOT NULL, code_createur varchar(20), code_modificateur varchar(20), date_creation date, date_modification date, statut int(10) NOT NULL, PRIMARY KEY (id));
CREATE TABLE statut (id int(10) NOT NULL AUTO_INCREMENT, libelle varchar(20) NOT NULL UNIQUE, PRIMARY KEY (id));
CREATE TABLE typeOrganisme (id int(10) NOT NULL AUTO_INCREMENT, libelle varchar(255) NOT NULL, code_createur varchar(20), code_modificateur varchar(20), date_creation date, date_modification date, statut int(10) NOT NULL, PRIMARY KEY (id));
CREATE TABLE typePiece (id int(10) NOT NULL AUTO_INCREMENT, libelle varchar(50) NOT NULL, est_renouvelable tinyint(1) NOT NULL, PRIMARY KEY (id));
CREATE TABLE vehicule (id int(10) NOT NULL AUTO_INCREMENT, immatriculation varchar(15) NOT NULL, modele int(10) NOT NULL, code_createur varchar(20), code_modificateur varchar(20), date_creation date, date_modification date, statut int(10) NOT NULL, PRIMARY KEY (id));
ALTER TABLE modele ADD CONSTRAINT FKmodele209598 FOREIGN KEY (statut) REFERENCES statut (id);
ALTER TABLE vehicule ADD CONSTRAINT FKvehicule381069 FOREIGN KEY (modele) REFERENCES modele (id);
ALTER TABLE vehicule ADD CONSTRAINT FKvehicule254977 FOREIGN KEY (statut) REFERENCES statut (id);
ALTER TABLE controlleur ADD CONSTRAINT FKcontrolleu459791 FOREIGN KEY (statut) REFERENCES statut (id);
ALTER TABLE enregistreur ADD CONSTRAINT FKenregistre751528 FOREIGN KEY (statut) REFERENCES statut (id);
ALTER TABLE typeOrganisme ADD CONSTRAINT FKtypeOrgani591716 FOREIGN KEY (statut) REFERENCES statut (id);
ALTER TABLE organisme ADD CONSTRAINT FKorganisme820853 FOREIGN KEY (type_organisme) REFERENCES typeOrganisme (id);
ALTER TABLE organisme ADD CONSTRAINT FKorganisme396356 FOREIGN KEY (statut) REFERENCES statut (id);
ALTER TABLE piece ADD CONSTRAINT FKpiece285841 FOREIGN KEY (type_piece) REFERENCES typePiece (id);
ALTER TABLE piece ADD CONSTRAINT FKpiece872480 FOREIGN KEY (vehicule) REFERENCES vehicule (id);
ALTER TABLE piece ADD CONSTRAINT FKpiece201170 FOREIGN KEY (provenance) REFERENCES organisme (id);
ALTER TABLE piece ADD CONSTRAINT FKpiece298783 FOREIGN KEY (statut) REFERENCES statut (id);
ALTER TABLE pieceInvalide ADD CONSTRAINT FKpieceInval415536 FOREIGN KEY (piece) REFERENCES piece (id);
ALTER TABLE pieceInvalide ADD CONSTRAINT FKpieceInval874835 FOREIGN KEY (statut) REFERENCES statut (id);
ALTER TABLE controle ADD CONSTRAINT FKcontrole939987 FOREIGN KEY (controlleur) REFERENCES controlleur (id);
ALTER TABLE controle ADD CONSTRAINT FKcontrole75648 FOREIGN KEY (statut) REFERENCES statut (id);
ALTER TABLE pieceInvalide ADD CONSTRAINT FKpieceInval221217 FOREIGN KEY (controle) REFERENCES controle (id);

