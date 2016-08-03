'use strict';

module.exports = function(app) {
	app.post('/email', function(req, res) {
		console.log('Howdy!');
		res.status(200).send({ data: { message: 'hello' }});
	});

  app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });
};