/** Cremos una nueva estrategia de autenticacion, este caso sera local. */
const LocalStrategy = require('passport-local').Strategy;

/** Traemos los modelos que creamos anteriormente */
const User = require('../models/user');

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
  });

  // Registero
  passport.use('local-signup', new LocalStrategy({
    // Estos son todos los campos que tenemos dentro del formulario de resitros,
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback : true //Olvidé que hacia esto :c
  },
  function (req, email, password, done) {
    /** Buscmaos por email, en caso de que existan iguales, 
     * retorne nada, y pare el proceso.
     */
    User.findOne({'local.email': email}, function (err, user) {
      if (err) {
        return done(err);
      }
      if (user) {
        return done(null, false, req.flash('signupMessage', 'Lastima... Este email ya existe.'));
      } else {
        /** Cremos un nuevo objero, donde pondremos todos los datos a ingresar al usuario,
         * pueden ser los que queramos.
         * 
         * EN este caso, algunos están quemados por el heco de que es una prueba :c
         */
        var newUser = new User();
        newUser.local.email = email;
        newUser.local.nombre = "None",
        newUser.local.edad = "None",  
        newUser.local.psicoEmail = "sebasbeleno15@gmail.com",  
        newUser.local.password = newUser.generateHash(password);
        newUser.save(function (err) {
          if (err) { throw err; }
          return done(null, newUser);
        });
      }
    });
  }));

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
}
