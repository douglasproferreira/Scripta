const path = require('path');

const nodemailer = require('nodemailer');

const hbs = require('nodemailer-express-handlebars');

const exphbs = require('express-handlebars');

const { host, port, user, pass } = require('../config/mail.json');

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass }
  });

// const viewPath = path.resolve("./src/resources/mail/");

transport.use('compile', hbs({
    viewEngine: exphbs.create({
        partialsDir: './src/resources/mail/partials'
    }),
    viewPath : path.resolve("./src/resources/mail/"),
    extName: '.html',
}))

module.exports = transport;