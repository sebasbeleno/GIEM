/** Importacion de modulos */
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const colors = require('colors');
const passport = require('passport');
const flash = require('flash');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
//Procesa la informacion que llega del navegador
const bodyParser = require('body-parser');
//Administra las sessiones del navegador
const session = require('express-session');

//Url de la base de datos
const { url } = require('./config/database.js');

mongoose.connect(url, {

});




require('./config/passport')(passport);
const Estudiantes = require('./models/estudiantes');

//Configuraciones
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



/*
Usamos en omodulo de Mirgan para que nos imprima por consola
las petiociones del usuario.
*/
//app.use(morgan('dev'));



// middlewares
app.use(cookieParser());
//La informacion que resiva de los form, la puedo ver desde ls urhl
app.use(bodyParser.urlencoded({extended: false}));
// Esto, seria algo que quierere passport.
app.use(session({
	secret: 'giemjs',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



app.post('/addEstudiante', (req, res) => {
	Estudiantes.findOne({'estudiante.correo': req.body.email}, function (err, user) {
		if (err) {
			return done(err);
		}
		if (user) {
			return done(null, false, req.flash('signupMessage', 'Lastima... Este email ya existe.'));
		}else{
			let estudiantes = new Estudiantes();

			estudiantes.estudiantes.nombre = req.body.name;
			estudiantes.estudiantes.correo = req.body.email;
			estudiantes.estudiantes.psicoEmail =  req.body.psicoEmail;
			estudiantes.estudiantes.password = req.body.ti;




			estudiantes.save(function (err) {
				if (err) res.send(err)
				
				res.redirect('/estudiantes')
			});
		}
	})
})

require('./routes/index')(app, passport);
require('./routes/panel')(app, passport);
require('./routes/test')(app, passport);

require('./routes/perfil')(app, passport);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

/** iniciamos el server en el puerto 300m, una vez
 * inicado le decimos que ejecute una funcion que 
 * imprima por consola "server en el puerto 3000"
 */
app.listen(app.get('port'), function () {
    console.log('GIEM iniciado en: http://localhost/'+ app.get('port'));

});

