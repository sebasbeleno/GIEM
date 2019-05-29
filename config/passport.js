/** Cremos una nueva estrategia de autenticacion, este caso sera local. */
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport')
/** Traemos los modelos que creamos anteriormente */
const User = require('../models/user');


const Estudiantes = require('../models/estudiantes');

module.exports = function (passport) {
  
  /** esto es requerido, ya que passport necesita serializar un usuario, 
   * es decir encriptar todo. Para seguiridad ;)
   */
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // & por ultimo, esto hace lo contrario al anterior, deseariliza todo.
  // para que pueda ser accedido por el frontend
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });

    Estudiantes.findById(id, function (err, estu) {
      done(err, estu);
    });
    
  });

  // login... Más de lo mismo en SIngup
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },

  function (req, email, password, done) {
    User.findOne({'local.email': email}, function (err, user) {
      if (err) { return done(err); }
      /** ------ NOTA -----
       * no se dice el error en expecifico por cuesiones de privacidad y seguridad.
       */
      if (!user) {
        return done(null, false, req.flash('loginMessage', 'Datos incorrectos'))
      
      }
      if (!user.validPassword(password)) {
        return done(null, false, req.flash('loginMessage', 'Datos incorrectos'));

      }
      return done(null, user);
  
    });
  }));

  passport.use('estu-login', new LocalStrategy({
    usernameField: 'emailEstu',
    passwordField: 'passwordEstu', 
    passReqToCallback: true 
  },  
  function (req, email, password, done) {
    console.log("Correo: " + email + ", password: " + password )
    Estudiantes.findOne({'estudiantes.correo': email}, function(err, estu){
      if(err) { return done(err) }
      console.log("Estos son los datos que encontré: " + estu)
      if (!estu) {
        console.log("Cant find a student")
        return done(null, false, req.flash('loginMessage', 'Datos incorrectos'));
      }
      if (!estu.validasContra(password)) {
        console.log("password incorrect")
        return done(null, false, req.flash('loginMessage', 'Datos incorrectos'));
      }
        console.log("Working")
        return done(null, estu)      
    })
  }))
}
