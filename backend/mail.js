const nodemailer = require("nodemailer");
require('dotenv').config();

const sendmail =async ( { fullName, email, message}, cb ) => {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    },
    tls:{
        rejectUnauthorized:false
    }
  });

  // send mail with defined transport object
   try{
        const info = await transporter.sendMail({
        from: `${email} <${process.env.MAIL_USERNAME}>`, // sender address
        to: "shubham763116@gmail.com", // list of receivers
        subject: "Hiring", // Subject line
        text: ` name: ${fullName} 
         message: ${message}`, // plain text body
      })
      console.log("Message sent: %s", info.messageId);
      cb(info);
   }
   catch(err){
       console.log(err);
   }
  

  
}

module.exports = sendmail;
