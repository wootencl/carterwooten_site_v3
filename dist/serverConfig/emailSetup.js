var nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: 'postmaster@mail.carterwooten.com',
    pass: '4ff96b2da729f4988cbde00b84a29b47'
  }
});