const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const smtpTransport = require('nodemailer-smtp-transport');

admin.initializeApp();

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
console.log('NEW DEPLOY!', gmailEmail);

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // return new Promise((resolve, reject) => {

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'daxtersky',
          pass: gmailPassword
        }
      });

      // const transporter = nodemailer.createTransport(smtpTransport({
      //   // host: 'smtp.gmail.com',
      //   service: 'Gmail',
      //   secureConnection: true,
      //   // port: 25,
      //   // pool: true,
      //   // port: 465,
      //   // secure: false,
      //   // secure: true,
      //   auth: {
      //     user: gmailEmail,
      //     pass: gmailPassword
      //   },
      //   // tls: {
      //   //   rejectUnauthorized: false
      //   // }
      // }));

      const mailOptions = {
        from: 'daxtersky@gmail.com',
        to: 'mikolaj.klarzuk@gmail.com',
        subject: 'firebase functions mail sent! :)',
        text: 'text........... :)',
        html: '<div>html!! </div>'
      };

      transporter.verify(function (error, success) {
        if (error) {
          console.log('ERROR - VERIFY', error);
        } else {
          console.log("MADE IT! - VERIFY", success);
        }
      });

      transporter.sendMail(mailOptions, (err, info) => {
        return new Promise(function (resolve, reject) {
          console.log('transporter.sendMail: info', info);
          transporter.sendMail(mailOptions, (error, info) => {
            console.log('transporter.sendMail: err', err);
            if (error) {
              reject(error);
            } else {
              resolve("The message was sent!");
            }
          });
        });
      });
    // });
  });
});
