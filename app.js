require('module-alias/register')
require('dotenv/config');
require('express-group-routes');

const { errorHandler, notFoundHandler } = require('@lib-error/error.handler')
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const studentRoute = require('@student-module/routes');
const subjectRoute = require('@subject-module/routes');
const studyPlanRoute = require('@study-plan-module/routes');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.group('/api', (router) => {
  studentRoute(router)
  subjectRoute(router)
  studyPlanRoute(router)
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(errorHandler)

module.exports = app;
