var nodemailer 	= require('nodemailer');
var fs 			= require('fs');
var path		= require('path');	
var mailer = {
	mailTargetAudience:function(reqBody){
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
			  //to: 'arjunbhexaware@gmail.com',
	to:'wilfredf@hexaware.com,saisub@hexaware.com,omprakashr@hexaware.com,rahulp@hexaware.com,rahulp2@hexaware.com,ravindrag@hexaware.com,arjunb@hexaware.com,arjunbhexaware@gmail.com',
			  subject:'Target Audience',
			  html: 'Hi ,<div>Greetings from <b>TTC</b>!!</div><div style="margin-top:8px"> Please find attached the target audience for your area</div><div style="margin-top:8px">Regards,</div><div>TTC Team</div>',
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
					resolve(reqBody);
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
		  //to: 'arjunbhexaware@gmail.com,arjunb@hexaware.com',
		  to:'wilfredf@hexaware.com,saisub@hexaware.com,omprakashr@hexaware.com,rahulp@hexaware.com,rahulp2@hexaware.com,ravindrag@hexaware.com,arjunb@hexaware.com,arjunbhexaware@gmail.com',
		  subject: 'Package details',
		  //html: "<div>Hi,</div><div style='margin-left:10px;margin-bottom:5px'>Greetings from TTC!!!</div><center>Package info- <i>WONDERS OF ITALY *NEW* - 11 DAYS, 9 CITIES</i></center><div style='margin-top:15px;'><b>ABOUT THIS TRIP</b></div><div>Pay tribute to the extraordinary masterpieces of Italy's greats - the captivating arias of Puccini and splendour of da Vinci, Michelangelo and Botticelli's talents in their full glory throughout this enduring exploration of Italy's alluring art, architecture and old-world charm. See the city of one hundred churches, the imposing towers of picturesque San Gimignano and the seas of pastel pinks, yellows and blues that cling dramatically to the Cinque Terre's Ligurian cliffs.</div><ul><li>10 NIGHTS - accommodation</li><li>15 MEALS - 10 hot buffet breakfasts,1 lunch (Be My Guest),4 dinners with local wine</li><li>ON-TRIP TRANSPORT - All transport shown.</li></ul><div>Regards,</div><div>TTC Team</div>"
		    //html:  "<div>Hi,</div><div style='margin-left:10px;margin-bottom:5px'>Greetings from TTC!!!</div><center>Package info- <i>WONDERS OF ITALY *NEW* - 11 DAYS, 9 CITIES</i></center><center><img src='cid:italy@img' alt='Wonders-Italy' height='160' width='160' align='middle'></center><div style='margin-top:15px;'><b>ABOUT THIS TRIP</b></div><div>Pay tribute to the extraordinary masterpieces of Italy's greats - the captivating arias of Puccini and splendour of da Vinci, Michelangelo and Botticelli's talents in their full glory throughout this enduring exploration of Italy's alluring art, architecture and old-world charm. See the city of one hundred churches, the imposing towers of picturesque San Gimignano and the seas of pastel pinks, yellows and blues that cling dramatically to the Cinque Terre's Ligurian cliffs.</div><center><img src='cid:italyPackage@img' alt='Wonders-package' align='middle'></center><div>Regards,</div><div>TTC Team</div>",
			html:"<div>Hi,</div><div style='margin-left:10px;margin-bottom:5px'>Greetings from TTC!!!</div><center><b>Package info</b>: <i>WONDERS OF ITALY *NEW* - 11 DAYS, 9 CITIES</i></center><center style='padding-top:5px'><img src='cid:italy@img' alt='Wonders-Italy' height='160' width='160' align='middle'></center><div style='margin-top:15px;'><b>ABOUT THIS TRIP</b></div><div>Pay tribute to the extraordinary masterpieces of Italy's greats - the captivating arias of Puccini and splendour of da Vinci, Michelangelo and Botticelli's talents in their full glory throughout this enduring exploration of Italy's alluring art, architecture and old-world charm. See the city of one hundred churches, the imposing towers of picturesque San Gimignano and the seas of pastel pinks, yellows and blues that cling dramatically to the Cinque Terre's Ligurian cliffs.</div><center style='padding-top:10px'><img src='cid:italyPackage@img' alt='Wonders-package' align='middle'></center> <center><div style='padding-top:10px'><b>Duration:</b> 11 days | <b>From:</b> US$2655 per person</div><div style='padding-top:20px'><a style='background-color:#b11116;color: white; font-family: serif;padding: 10px;text-decoration: none;' href='https://www.trafalgar.com/en-sg/tours/wonders-of-italy/summer-2018' target='_blank'>View trip details ❯ </a></div></center><div style='padding-top:15px'>Regards,</div><div>TTC Team</div>",
			
			attachments: [{
        filename: 'italy-wonders.png',
        path: './public/images/italy-wonders.png',
	//content:fs.createReadStream('./public/images/italy-wonders.png'),
        cid: 'italy@img' //same cid value as in the html img src
    },
				     {
        filename: 'italy-package.PNG',
        path: './public/images/italy-package.PNG',
	//content:fs.createReadStream('./public/images/italy-wonders.png'),
        cid: 'italyPackage@img' //same cid value as in the html img src
    }]
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

