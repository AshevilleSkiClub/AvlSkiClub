
/**
 * Module dependencies
 */


var express = require('express');
var mongoose = require('mongoose');

//connect to database
require(__dirname+'/models/imageModel.js');
mongoose.connect('mongodb://localhost/asClub');

var bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('express-error-handler'),
    morgan = require('morgan'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path');

var app = module.exports = express();




/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');


//set static files
app.use("/bower_components",express.static(path.join(__dirname,'../','app/','bower_components')));
app.use("/css",express.static(path.join(__dirname,'../','app/','content/styles')));
app.use("/img",express.static(path.join(__dirname,'../','app/','content/img')));
app.use("/js",express.static(path.join(__dirname,'../','app/','content/js')));
app.use("/forms",express.static(path.join(__dirname,'../','app/','content/forms')));
app.use("/newsletters",express.static(path.join(__dirname,'../','app/','content/newsletters')));
app.use("/components",express.static(path.join(__dirname,'../','app/','components')));
app.use("/common",express.static(path.join(__dirname,'../','app/','common')));
app.use("/calendar",express.static(path.join(__dirname,'../','app/','calendar')));
app.use("/contact",express.static(path.join(__dirname,'../','app/','contact')));
app.use("/home",express.static(path.join(__dirname,'../','app/','home')));
app.use("/resorts",express.static(path.join(__dirname,'../','app/','resorts')));
app.use("/membership",express.static(path.join(__dirname,'../','app/','membership')));
app.use("/trips",express.static(path.join(__dirname,'../','app/','trips')));
app.use("/gallery",express.static(path.join(__dirname,'../','app/','gallery')));
app.use("/news",express.static(path.join(__dirname,'../','app/','news')));
app.use("/racing",express.static(path.join(__dirname,'../','app/','racing')));
app.use("/galleryService",express.static(path.join(__dirname,'../','app/','galleryService')));
app.use("/app",express.static(path.join(__dirname,'../','app/')));
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
    app.use(errorHandler());
}

// production only
if (env === 'production') {
    // TODO
}


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);



// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * Start Server
 */
http.createServer(app).listen(8080, app.get('127.0.0.1'), function () {
        console.log('Express server listening on port ' + app.get('port'));
});