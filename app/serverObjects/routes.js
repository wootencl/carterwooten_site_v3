'use strict';

module.exports = function(app) {
  app.get('/*', function (req, res) {
    res.sendFile( 'public/index.html', { root: process.env.PWD});
  });
};