'use strict';

/** Setup test suite **/

var config = require('../config');
var common = require('./common');
var rarity = require('rarity');
var factory = require('factory-lady');
var create = require('create-dataset');

// Let's not wipe useful a database
if(config.mongoUrl.indexOf("localhost") === -1) {
  throw new Error("You're running the test suite on a distant Mongo DB (maybe prod?). This would wipe all collections. Exiting without running test suite, unset MONGO_URL to use default values.");
}

// Drop mongo database
before(common.dropMongo);

// Set create-dataset config
// see https://github.com/AnyFetch/create-dataset/blame/master/lib/index.js
before(function() {
  create.config = {
    test: {
      generator: function(data, cb) {
        factory.create('test', data, rarity.pad([null], cb));
      }
    },
  };
});
