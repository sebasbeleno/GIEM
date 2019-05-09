const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/** Es un modulo que nos ayuda a encriptar nuestras
 * passwords de una manera más segura
 */
const estuSchema = Schema({
    nombre: String,
    correo: String,
    ti: Number,
    psicoEmail: String
});

module.exports = mongoose.model('Estudiantes', estuSchema);

