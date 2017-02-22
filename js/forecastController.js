// CONTROLLERS

/* Forecast Controller */
myapp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', 
function($scope, $routeParams, cityService, weatherService){ 
	$scope.title = 'Forecast Page';
	
	// tracks city name between pages/controllers.
	$scope.city = cityService.city;

	// get number of days requested from the URL, or default to 2.
	$scope.days = ( Number($routeParams.days) ) || '2';
	
	// get the weather object from the forecast provider using the service in "services.js"
	$scope.weatherResult = weatherService.GetWeather( $scope.city, $scope.days );
	
	// Kelvin to Fahrenheit
	$scope.to_f = function (degK){
		return (Math.round ( (1.8 * (degK -273)+32), 4)) +"ºF";
	}

	// unix date stamp (epoch seconds) to JS date object (that can be formated in the view)
	$scope.to_d = function (val){
		return new Date(val * 1000);
	}

	// Get days from the URL and set it in the $scope variable "days".  Also return the value.
	$scope.daysinforecast = function (){
		$scope.days = $routeParams.days;
		return $routeParams.days;
	}
}]);



// NOTE
/*
A Note Regarding API Usage
An important note regarding API usage

We use the free openweathermap API to get weather data. Openweathermap now requires a free sign up to use their data, and they email you a key that you include in the URL when you request data.

To get your weather app working you will need to do the following:

1) Follow the instructions here: http://openweathermap.org/appid to sign up, and retrieve your API key.

2) Use this URL to get weather data (services.js):
http://api.openweathermap.org/data/2.5/forecast/daily?APPID=YOURAPIKEY

Be sure to put the API Key you get from openweathermap in place of the phrase 'YOURAPIKEY'.	
	
*/
