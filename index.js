/** Importacion de modulos */
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const colors = require('colors');

/*
Usamos en omodulo de Mirgan para que nos imprima por consola
las petiociones del usuario.
*/
app.use(morgan('short'));


/** Guardamos en una const lo qye no triga nuestro
 * archivo de rutas llamado 'routes'
 */
const routes  = require('./routes');



//app.use(express.static('public'));

/* Le decimos a nuestro server que use las rutas que  
 * anteriormente llamamos en la variable de mismo nombre
*/
app.use(routes);


/** iniciamos el server en el puerto 300m, una vez
 * inicado le decimos que ejecute una funcion que 
 * imprima por consola "server en el puerto 3000"
 */
app.listen(3000, function () {
    console.log('Server on port 3000'.blue);
});

