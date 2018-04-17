var nodemailer 	= require('nodemailer');
var fs 			= require('fs');
var path		= require('path');	
var mailer = {
	mailTargetAudience:function(attachmentFile){
		return new Promise(function(resolve, reject){
			var transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: 'hexatestmailer@gmail.com',
					pass: 'a###W14&$'
				}
			});
			var fileName = 'Target-audience.xlsx';
			var mailOptions = {
			  from: 'hexatestmailer@gmail.com',
			  to: 'arjunbhexaware@gmail.com',
			  subject:'Target Audience',
			  text: 'Hi ,<div>Greetings from <b>TTC</b>!!</div><div> Please find attached the target audience for your area</div>',
			  attachments:[
				{
					filename:fileName,
					content:fs.createReadStream('Target-audience.xlsx')		
				}
			  ]
			};

			transporter.sendMail(mailOptions, function(error, info){
				if (error) {
					console.log(error);
					reject(error);
				} else {
					console.log(info.response);
					resolve({
						"speech": "Mail has been sent to you registered emailID",
						"displayText":"Mail has been sent to you registered emailID"
					});
				}
			});
		});
	}	,
mailPackageDetails:function(reqBody){
	return new Promise(function(resolve, reject){
		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'hexatestmailer@gmail.com',
				pass: 'a###W14&$'
			}
		});
		
		var mailOptions = {
		  from: 'hexatestmailer@gmail.com',
		  to: 'arjunbhexaware@gmail.com',
		  subject: 'Package details',
		  text: "Find attached the following details"
		};

		transporter.sendMail(mailOptions, function(error, info){
			if (error) {
				console.log(error);
				reject(error);
			} else {
				console.log(info.response);
				resolve(reqBody);
			}
		});
	});
}

}

module.exports = mailer;

