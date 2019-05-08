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
}); 

routes.get('/', (req, res  ) => {
    res.render('artes');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('ciencias_matematicas');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('comercial');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('construcciones');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('contabilidad');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('deportes');
 });

 routes.get('/', (req, res  ) => {
    res.render('electricidad');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('electronica');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('gastronomia');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('gestion');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('humanidades');
 }); 

 

 routes.get('/', (req, res  ) => {
    res.render('industrial');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('madera');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('metalisteria');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('moda');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('musica');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('plastica');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('programacion');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('promocion');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('quimica');
 }); 

 routes.get('/', (req, res  ) => {
    res.render('sistemas');
 }); 

 
 



/** Exportamos todo nuestro metodo routes 
 * para que se pueda usar en otros arvhivos. 
 */
module.exports = routes;