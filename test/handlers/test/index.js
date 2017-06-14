'use strict';

var request = require('supertest');
var async = require('async');
var create = require('create-dataset');

var common = require('../../common');
var server = require('../../../app');

describe('Test', function() {
  before(common.wipeMongo);

  before(function initUserAgent() {
    userAgent = request.agent(server);
  });

  var dataset = {};
  var rawDataset = {
    test: {},
  };

  before(create.apply(rawDataset, dataset));

  describe('test methods', function() {
    it('should test', function(done) {
      userAgent
        .get('/test')
        .expect(200)
        .end(done);
    });
  });
});
