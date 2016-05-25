var getCity = angular.module('getCity', []);
getCity.controller('cityController', function($scope, $http){

	var apikey = '051d225f889787cb457e6eb4cb6a32f5';
	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
	var imgUrl = "http://openweathermap.org/img/w/";

	$http.get(weatherUrl + "Atlanta&units=imperial&APPID=" + apikey, {
	}).then(function successCallback(response){
		console.log($scope.city);
		$scope.weatherIcon = 'http://openweathermap.org/img/w/' + response.data.weather[0].icon + '.png';
		$scope.weather = response.data.weather[0].description;
		$scope.skyes = response.data.weather[0].main;
		$scope.temp = response.data.main.temp;
		$scope.humidity = response.data.main.humidity;
		$scope.city = response.data.name;
	});

	$scope.enterCity = function(){
		console.log($scope.userInput);
		$scope.city = $scope.userInput;
		$http.get(weatherUrl + $scope.city + "&units=imperial&APPID=" + apikey, {
	}).then(function successCallback(response){
		// console.log($scope.city);
		$scope.weatherIcon = 'http://openweathermap.org/img/w/' + response.data.weather[0].icon + '.png';
		$scope.weather = response.data.weather[0].description;
		$scope.skyes = response.data.weather[0].main;
		$scope.temp = response.data.main.temp;
		$scope.humidity = response.data.main.humidity;
		$scope.city = response.data.name;
	})

}});
// router.get('/', function(req, res, next) {

// 	var apikey = '051d225f889787cb457e6eb4cb6a32f5';
// 	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
// 	var city =  "Atlanta&units=imperial&APPID="+apikey;
// 	// var userInput = document.getElementById("myForm").elements[0].value;
// 	// console.log(userInput);

// 	request.get((weatherUrl + city), function(error, response, body){
// 		body = JSON.parse(body);
// 		weatherIcon = 'http://openweathermap.org/img/w/' + body.weather[0].icon + '.png';
// 		console.log(body);
// 		res.render('index', 
// 			{
// 				body: body,
// 				icon: weatherIcon
// 			});
// 	});
// });

// module.exports = router;
// $http.get(apiUrl + 'getUserData?token=' + $cookies.get('token'),{
// 	}).then(function successCallback(response){
// 		if(response.data.failure == 'badToken'){
// 			$location.path('register');
// 		}else{
// 		$scope.userOrder = response.data;
// 		$scope.fullName = response.data.fullName;
