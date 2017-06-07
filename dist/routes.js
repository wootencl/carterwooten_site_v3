'use strict';

var contactMessage = require('./serverObjects/contactMessage');
var transporter = require('./serverConfig/emailSetup');

module.exports = function(app) {
	app.post('/email', function(req, res) {
		var message = contactMessage(req.body);
    transporter.sendMail(message, function(error, info) {
      if (error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal server error. Please try again.'});
      } else {
        return res.status(200).send({message: 'Successful token creation'});
      }
    });
	});

  app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });
};