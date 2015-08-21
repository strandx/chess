var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
app.use(express.static(__dirname + '/app'));

app.get('/send', function(req, res) {
  var mailOptions = {
    to: 'payne.jc@me.com',
    subject: 'Hello World!',
    text: 'This is the body of the email'
  };
  smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) {
      console.log(error);
      res.end("error");
    } else {
      console.log("Message sent: " + response.message);
      res.end("Sent");
    }
  });
});

var smtpTransport = nodemailer.createTransport("SMTP", {
  service: "Mailgun",
  console.log(process.env.MAILGUN_SMTP_PORT);
  auth: {
    user: "strandx@gmail.com",
    pass: "llap6GGL@22"
  }
});

app.listen(process.env.PORT || 3000);
