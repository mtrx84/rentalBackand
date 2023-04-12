"use strict";
const {usermail,
  passmail,
  frommail,
  mailhost,
  ownermail
}= require('../config')
const path = require('path');
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(message, subject, address = ownermail, fileName) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();
  console.log('mailer')

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: mailhost,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: usermail, // generated ethereal user
      pass: passmail, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: frommail, // sender address
    to: `${address}`, // list of receivers
    bcc:`${ownermail}`,
    subject: `${subject}`, // Subject line
    text: "text wiadomość od node.js", // plain text body
    html: `${message}`, // html body
    
    
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// main().catch(console.error);
module.exports ={
  sendMail
}