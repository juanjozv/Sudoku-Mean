/**
 * Sudoku REST-API
 * @author juanjozv@gmail.com 
 * @author osqui.salazar@gmail.com 
 * @since 2017
 */

// IMPORTS
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let app = express();
let morgan = require('morgan');
let favicon = require('express-favicon');
let api = require('./server/routes/api.js');

// APP BASIC CONFIGURATION
app.use(morgan('dev')); // log requests to console
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080; // set  port (default 8080)

// APP settings
// REGISTER STATIC
// See https://expressjs.com/en/starter/static-files.html
//app.use('/static', express.static((__dirname + '/dist')));
app.use('/static', express.static(path.join(__dirname, 'dist')))

// See https://www.npmjs.com/package/express-favicon
app.use(favicon(__dirname + '/src/images/favicon.png'));

// REGISTER API ROUTER
app.use('/api', api);

//----------- START THE SERVER ---------------------
app.listen(port);
console.log('*** Sudoku Server is up and running on port ' + port + ' ***');