/** Importacion de modulos */
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const colors = require('colors');


//Configuraciones
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));


/*
Usamos en omodulo de Mirgan para que nos imprima por consola
las petiociones del usuario.
*/
app.use(morgan('dev'));


/** Guardamos en una const lo qye no triga nuestro
 * archivo de rutas llamado 'routes'
 */
const routes  = require('./routes');


/* Le decimos a nuestro server que use las rutas que  
 * anteriormente llamamos en la variable de mismo nombre
*/
app.use(routes);


//Static files
app.use(express.static(path.join(__dirname, 'public')));


/** iniciamos el server en el puerto 300m, una vez
 * inicado le decimos que ejecute una funcion que 
 * imprima por consola "server en el puerto 3000"
 */
app.listen(app.get('port'), function () {
    console.log('Server on port '+ app.get('port'));

});

