var nodemailer 	= require('nodemailer');
var fs 			= require('fs');
var path		= require('path');	
var mailer = {
	mailTargetAudience:function(reqBody){
		return new Promise(function(resolve, reject){
			console.log("------------------------mailTargetAudience--------------------");
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
			  html: 'Hi ,<div>Greetings from <b>TTC</b>!!</div><div> Please find attached the target audience for your area</div>',
			  attachments:[
				{
					filename:fileName,
					content:fs.createReadStream('ClientData.xlsx')		
				}
			  ]
			};

			transporter.sendMail(mailOptions, function(error, info){
				if (error) {
					console.log(error);
					reject(error);
				} else {
					resolve(reqBody);
				}
			});
		});
	}	,
mailPackageDetails:function(reqBody){
	return new Promise(function(resolve, reject){
		console.log("***************************mailTargetAudience***************************");
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
		  html: "<b>Find attached the following details</b> <div>test</div>"
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

