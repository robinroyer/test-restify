'use strict';

/**
 * @file Define artist factories
 *
 * This factory eases the creation of Mock artist.
 */
var mongoose = require('mongoose');
var factory = require('factory-lady');
require('../../app');
var Test = mongoose.model('Test');

factory.define('test', Test, {});
