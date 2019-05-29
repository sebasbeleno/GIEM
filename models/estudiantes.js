const mongoose = require('mongoose');

/** Es un modulo que nos ayuda a encriptar nuestras
 * passwords de una manera más segura
*/
const bcrypt = require('bcrypt-nodejs');

const estuSchema = new mongoose.Schema({
  estudiantes: {  
    nombre: String,
    correo: String,
    ti: String,
    psicoEmail: String
  }

    
});

estuSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};


estuSchema.methods.validasContra = function (password) {
  return bcrypt.compareSync(password, this.estudiantes.ti);
};

module.exports = mongoose.model('Estudiantes', estuSchema);

