const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const colors = require('colors');
app.use(morgan('short'));


const routes  = require('./routes');



app.use(express.static('public'));
app.use(routes);

app.listen(3000, function () {
    console.log('Server on port 3000'.blue);
});

