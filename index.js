/**
 * ------------------------------
 *  API Index File
 * ------------------------------
 * @filename  index.js
 * @location  /
 * @author    Jonathan Ho <joho@joho.io>
 */

'use strict';

//  Load Modules
// ------------------------------

var express       = require('express');
var app           = express();

var bodyParser    = require('body-parser');
var compress      = require('compression');
var logger        = require('morgan');


//  Configuration
// ------------------------------

var errorHandler  = require('./routes/utils/errorHandler')();
var port          = process.env.PORT || 7200;
var environment   = process.env.NODE_ENV;
var routes;


//  Bind Express Middleware
// ------------------------------
// https://www.npmjs.com/package/body-parser
// https://www.npmjs.com/package/compression
// https://www.npmjs.com/package/morgan
// http://expressjs.com/guide/error-handling.html

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(compress());
app.use(logger('dev'));
app.use(errorHandler.init);


//  Load Routes
// ------------------------------

routes = require('./routes/index')(app);


//  Log to Console
// ------------------------------

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

var source = '';


//  Ping-Pong
// ------------------------------

app.get('/ping', function(req, res, next) {
  console.log(req.body);
  res.send('pong');
});



//  Environment Mode
// ------------------------------

switch (environment){
  case 'production':
    console.log('** PRODUCTION ON AZURE **');
    console.log('serving from ' + './build/');
    process.chdir('./../../');
    app.use('/', express.static('./build/'));
    break;
  case 'stage':
  case 'build':
    console.log('** BUILD **');
    console.log('serving from ' + './build/');
    app.use('/', express.static('./build/'));
    break;
  default:
    console.log('** DEV **');
    console.log('serving from ' + './');
    app.use('/', express.static('./'));
    break;
}



//  Listen!
// ------------------------------

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
  console.log('env = ' + app.get('env') +
    '\n__dirname = ' + __dirname  +
    '\nprocess.cwd = ' + process.cwd());
});
