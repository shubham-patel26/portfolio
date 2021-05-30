
const nodemailer = require('nodemailer');
require('dotenv').config();
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
});

const sendEmail = ( { fullName, email, message}, cb) =>{
  
  const mailOptions = {
        from: `${email} <process.env.MAIL_USERNAME>`, // sender address
        to: process.env.RECEIVER_MAIL, // list of receivers
        subject: "Hiring", // Subject line
        text: ` name: ${fullName} 
               message: ${message}`, // plain text body
      }

    transporter.sendMail(mailOptions, (error , info) => {
      if(error){
        console.log(error);
      }else {
        cb(info);
      }
    })
}
module.exports = sendEmail;
