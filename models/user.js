/** Requerimos mongoose, que es un modulo que nos sirve 
 * para deifinir el modelo de nuestra base de datos en
 * mongodb
 */
const mongoose = require('mongoose');
/** Es un modulo que nos ayuda a encriptar nuestras
 * passwords de una manera más segura
 */
const bcrypt = require('bcrypt-nodejs');

/** Cremos un nuevo esquema de usaurio, usando moongose
 * En el se indica el esquema y los datos que irán dentro 
 * de este esquena, ya sea local o de otros medios.
 */
const userSchema = new mongoose.Schema({
  local: {
    email: String,
    password: String,
    nombre: String,
    edad: String,
    psicoEmail: String
  }
});

/** Cremos un hash, o lo que equivale a encriptar 
 * nuestra contraseña.
 * 
 * Esto es una guncion que retonr,a una contraseña encriptada,
 * 'genSaltSync, y como parametor le damos el numero de 'vueltas
 * o la fuerza del hash de nuestra contraseña.
 */
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/** Por ultimo esta funcion verifica si la contraseña, espeficiamente
 * del login que es ingresada por el usuario, conicide con
 * la que tenemos en nuestra db.
 * 
 * Usmaos el metodo compareSync, y nos retornará true or false
 */
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};


/** Por ultimo, se exporta el modelo que configuramos, con el nombre
 * 'User'
 */
module.exports = mongoose.model('User', userSchema);