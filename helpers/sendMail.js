const nodemailer = require('nodemailer');


module.exports.sendMail = (email, subject, html) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // use false for STARTTLS; true for SSL on port 465
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });
      
      // Configure the mailoptions object
      const mailOptions = {
        from: 'giapb14d44hvan@gmail.com',
        to: email,
        subject: subject,
        html: html
      };
      
      // Send the email
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log('Error:', error);
        } else {
          console.log('Email sent: ', info.response);
        }
      });

}