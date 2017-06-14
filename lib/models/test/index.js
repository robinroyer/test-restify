'use strict';

var mongoose = require('mongoose');
var TestSchema = require('./schema');

TestSchema.methods = require('./methods');
module.exports = mongoose.model('Test', TestSchema);
