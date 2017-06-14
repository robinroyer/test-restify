'use strict';

// Routes client requests to handlers
module.exports = function(server, handlers) {
  // For the server status
  server.get('/status', handlers.status.get);
  // Test REST
  server.get('/test', handlers.test.index.get);
  server.post('/test', handlers.test.index.post);
  server.get('/test/:id', handlers.test.testid.index.get);
  server.put('/test/:id', handlers.test.testid.index.put);
  server.del('/test/:id', handlers.test.testid.index.del);
};
