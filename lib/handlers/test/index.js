'use strict';

var mongoose = require('mongoose');
var Test = mongoose.model('Test');
var restify = require('restify');
var async = require('async');

module.exports.get = function get(req, res, next) {
  res.send(200);
  next();
};


module.exports.post = function post(req, res, next) {
  res.send(200);
  next();
};
