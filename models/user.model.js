// import de mongoose
const mongoose = require('mongoose');

// Définition des attributs d'un utilisateur
const userSchema = {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    address: { type: String }
}

// Création du modèle (Objet qui contient les fonctions pour communiquer avec Mongo)
const UserModel = mongoose.model('users', userSchema)

// Export pour utiliser le modèle à l'exterieur
module.exports = UserModel;
