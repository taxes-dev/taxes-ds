var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var sass = require('node-sass-middleware');
var concatenateJs = require('concatenate-js-middleware');

var routes = require('./routes');
var jsConfig = require('./jsConfig');

var app = express();

// compile JavaScript
concatenateJs.concatenateJsAndSaveMultiple({
  originPath: path.join(__dirname, 'public', 'scripts'),
  destinationPath: path.join(__dirname, 'public', 'scripts'),
  files: ['libs.js', 'taxesds.js'],
  minify: false,
  config: jsConfig
}).catch((reason) => {
  console.log(reason);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'components'));
hbs.registerPartials(path.join(__dirname, 'views', 'examples'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/css',
    sass({
        src: path.join(__dirname, 'sass'), 
        dest: path.join(__dirname, 'public', 'css')
    })
);
app.use(express.static(path.join(__dirname, 'public')));

// build various data for pages
app.use(function(req, res, next){
    res.locals.routePath = req.path;
    next();
});

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      page: { 'title': 'Oops! ' + err.message },
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    page: { 'title': 'Oops! ' + err.message },
    message: err.message,
    error: {}
  });
});

module.exports = app;
