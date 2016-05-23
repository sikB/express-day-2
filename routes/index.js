var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

	var apikey = '051d225f889787cb457e6eb4cb6a32f5';
	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;
	// var userInput = document.getElementById("myForm").elements[0].value;
	console.log(userInput);
	
	function userInput() {
    var inPut = document.getElementById("myForm").elements[0].value;
	var userCity = 'http://api.openweathermap.org/data/2.5/weather?q=' + inPut + '&units=imperial&APPID=' +apikey;
    // console.log(userInput.data);
}

	request.get(weatherUrl, function(error, response, body){
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
