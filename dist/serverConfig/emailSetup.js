var nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: 'postmaster@mail.carterwooten.com',
    pass: process.env.MAILGUN_PASSWORD.replace(/\"/g, "") // Weird escaping I have to do for AWS Param Store
  }
});