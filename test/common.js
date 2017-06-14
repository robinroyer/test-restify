'use strict';

/**
 * Load test environment
 */

var path = require('path');
var mongoose = require('mongoose');
var mochaMongoose = require('mocha-mongoose');

var config = require(path.join(__dirname, '..') + '/config');

exports.wipeMongo = mochaMongoose(config.mongoUrl, {
  noClear: true
});

exports.dropMongo = function() {
  /* Connect to the DB */
  mongoose.connect(config.mongoUrl,function() {
    /* Drop the DB */
    mongoose.connection.once('connected', function() {
      mongoose.connection.db.dropDatabase();
    });
  });
};
