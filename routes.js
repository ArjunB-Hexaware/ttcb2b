var express 		= require('express');
var router			= express.Router();	 

var fs 				= require("fs");	
var request			= require('request');
var path			= require("path");	
var email           = require("./mail.js");


//var Authentication = require('./utilities/Authentication');


//const sendOtp 		= new SendOtp('209393AILCgzYm2m675acd86a1');
router.get('/', function(req, res) {
	console.log('hari');
  res.redirect("/home.html");
});

router.get('/chat', function(req, res) {
  res.redirect('/chat.html');
});


router.post('/botHandler',/*Authentication.SetRealm('botHandler'), Authentication.BasicAuthentication, */function(req, res){
	//console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
	console.log('Dialogflow Request body: ' + JSON.stringify(req.body));	
		var intentName = req.body.result.metadata.intentName;
		switch(intentName){
			case 'easyQuote':func = easyQuote;break;
			case 'feedBackOptionsIntent':func = feedBackOptionsIntent;break;
			case 'feedBackNoIntent':func = feedBackNoIntent; break;
			case 'chooseOptions': func = validatePartnerCode; break;
			case 'emailDetails - yes': func = email.mailPackageDetails; break;
		}
		func(req.body)
		.then((resp)=>{
			console.log(resp);
			res.json(resp).end();	
		})
		.catch((err)=>{
			res.json(err).end();	
		});
});


var feedBackNoIntent = function(reqBody){
	return new Promise(function(resolve, reject){
		resolve({		
			"speech": "",
			"displayText":"",
			"followupEvent":{
				"name":"finalIntent",
				"data":{  
					"finalMsg":"Okay, Thank you",					
				}
			}
		});
	});
}
var feedBackOptionsIntent = function(reqBody){
	return new Promise(function(resolve, reject){
		resolve({		
			"speech": "",
			"displayText":"",
			"followupEvent":{
				"name":"finalIntent",
				"data":{  
					"finalMsg":"We thank you for your valuable feedback",					
				}
			}
		});
	});
}

var easyQuote = function(reqBody){
	return new Promise(function(resolve, reject){
		resolve({		
			"speech": "",
			"displayText":"",
			"followupEvent":{
				"name":"feedBackIntent",
				"data":{  
					"confirmMsg":"Thank you for requesting a quote. We'll get back to you with the details you're looking for as soon as possible",					
				}
			}
		});
	});
}

var validatePartnerCode=function(reqBody){
console.log("Lenght --- >",reqBody.result.parameters.number.length);
	if(reqBody.result.parameters.number.length == 8){
		return new Promise(function(resolve, reject){
		resolve({		
			"speech": "",
			"displayText":""
		});
	});
	}else{
		return new Promise(function(resolve, reject){
		resolve({		
			"speech": "Partner code should be a 8 digit number",
			"displayText":"Partner code should be a 8 digit number"
			
		});
	});
}
}



module.exports = router;



			