var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
// var Loader = require('loader');
// var _ = require('lodash');

var router = require('./router');
var usersRouter = require('./routes/users');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.locals._layoutFile = 'layout.html';
app.enable('trust proxy');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);
app.use('/users', usersRouter);

// _.extend(app.locals, {
//     Loader: Loader,
// });
//
// _.extend(app.locals, require('./common/render_help'));

module.exports = app;
