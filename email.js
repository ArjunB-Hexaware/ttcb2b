const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: 'hexatestmailer@gmail.com',
            clientId: '652038069279-olvrig3ckoo0ghueb778fb7laekqqte8.apps.googleusercontent.com',
            clientSecret: 'weRBar_GxYoH8eIh9XyBQDjw',
            refreshToken: ''
        })
    }
})

var mailOptions = {
    from: 'hexatestmailer@gmail.com',
    to: 'arjunbhexaware@gmail.com',
    subject: 'Nodemailer test',
    text: 'Hello World!!'
}

transporter.sendMail(mailOptions, function (err, res) {
    if(err){
        console.log('Error');
    } else {
        console.log('Email Sent');
    }
})
