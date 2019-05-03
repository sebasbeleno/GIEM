const express = require('express');
const routes = express.Router();
const path = require('path');


routes.get('/', (req, res  ) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, '/public')
    })
   
 }); 


 
 routes.get('/academica', (req, res  ) => {
    res.sendFile('academica.html', {
        root: path.join(__dirname, '/public')
    })
})


routes.get('/deportes', (req, res  ) => {
    res.sendFile('deportes.html', {
        root: path.join(__dirname, '/public')
    })
})


module.exports = routes;