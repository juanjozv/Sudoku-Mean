/**
 * Sudoku REST-API
 * @author juanjozv@gmail.com 
 * @author osqui.salazar@gmail.com 
 * @since 2017
 */

// IMPORTS
let express = require('express');
let path = require('path');
let http = require('http');
let bodyParser = require('body-parser');

//Obtain API Routes
let api = require('./server/routes/api.js');

let app = express();
let morgan = require('morgan');
let favicon = require('express-favicon');


// APP BASIC CONFIGURATION
app.use(morgan('dev')); // log requests to console
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


let port = process.env.PORT || 8080; // set  port (default 8080)

// APP settings
// REGISTER STATIC
// See https://expressjs.com/en/starter/static-files.html
//app.use('/static', express.static((__dirname + '/dist')));
app.use(express.static(path.join(__dirname, 'dist')))

// See https://www.npmjs.com/package/express-favicon
//app.use(favicon(__dirname + '/src/images/favicon.png'));

// REGISTER API ROUTER
app.use('/api', api);

//Create HTTP server
let server = http.createServer(app);

//----------- START THE SERVER ---------------------
//app.listen(port);
server.listen(port);
console.log('*** Sudoku Server is up and running on port ' + port + ' ***');


//Most of the code was taken from this tutorial: https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli