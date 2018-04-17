var nodemailer 	= require('nodemailer');
var fs 			= require('fs');
var path		= require('path');	
var mailer = {
	mailTargetAudience:function(toAddress, month, mainContent,attachmentFile){
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
					content:fs.createReadStream(attachmentFile)		
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
						"speech": "",
						"displayText":""
					});
				}
			});
		});
	}	,
mailPackageDetails:function(){
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
				resolve({
					"speech": "",
					"displayText":""
				});
			}
		});
	});
}

}

module.exports = mailer;

