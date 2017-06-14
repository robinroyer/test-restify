// var pg = require('pg');
// var restify = require('restify');
// var config = require('../../config/index.js');
// var connectionString = config.postgresUrl;
// var nodeEnv = config.nodeEnv
//
// var errorHandler = function(cb) {
//   if(nodeEnv === 'development') {
//     console.log(err);
//   }
//   cb(new restify.InternalServerError('Database error'));
// };
//
// module.exports = function pgDriver(query, data, cb) {
//   // Get a Postgres client from the connection pool
//   pg.connect(connectionString, function(err, client, done) {
//     // Handle connection errors
//     if(err) {
//       return errorHandler(done);
//     }
//
//     // SQL Query > Update Data
//     client.query(query, data);
//
//     // After all data is returned, close connection and return results
//     query.on('end', function() {
//       console.log(arguments);
//       cb(null);
//     });
// });
