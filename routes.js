/** Importacion de modulos */
const express = require('express');
/** En este caso no ncesitamos todo el modulo de express
 * solo ocupamos su objeto de ritas, que es lo que 
 * haremos en este archivo
  */
const routes = express.Router();
const path = require('path');


/** Le decimos las rutas que querremos añadir a nuestro
 * servidor y su arcvhio de respuesta, si quieren más
 * imformacion sobre estas lineas me pueden llamar.
 * Esto es un poco más largo
 */
routes.get('/', (req, res  ) => {
   res.render('index');
}); 


 
routes.get('/academica', (req, res  ) => {
    res.render('academica');
})


routes.get('/deportes', (req, res  ) => {
    res.render('deportes');
})


/** Exportamos todo nuestro metodo routes 
 * para que se pueda usar en otros arvhivos. 
 */
module.exports = routes;