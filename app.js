// import d'express
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

// import de dotenv (livrairie)
const dotenv = require('dotenv');
// configuration des variables d'environnement avec le fichier .env
dotenv.config();

// import du script de connexion à la bdd
require('./config/db.config');

// import des routes
const userRoute = require('./routes/users.route');

// création de l'app
const app = express();

// Lecture du port depuis les variables d'environement, si elle existe elle est lue
// depuis les variables d'environement
// sinon elle passe à 3000
const PORT = process.env.NODE_PORT || 3000;

// Middlewares
app.use(express.json()); // Middleware pour parser le JSON
app.use(morgan('tiny')); // Middleware qui annonce les connections dans la console
app.use(helmet()); // Middleware pour sécuriser les headers de l'API

// utilisation des routes
app.use(userRoute);

// écoute sur le port donné en param
app.listen(PORT, () => {
    console.log(`Express lancé sur le port ${PORT}`)
});