var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

	var apikey = '051d225f889787cb457e6eb4cb6a32f5';
	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
	var city =  "Atlanta&units=imperial&APPID="+apikey;
	// var userInput = document.getElementById("myForm").elements[0].value;
	// console.log(userInput);

	request.get((weatherUrl + city), function(error, response, body){
		body = JSON.parse(body);
		weatherIcon = 'http://openweathermap.org/img/w/' + body.weather[0].icon + '.png';
		console.log(body);
		res.render('index', 
			{
				body: body,
				icon: weatherIcon
			});
	});
});

module.exports = router;
