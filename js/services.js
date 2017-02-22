// SERVICES

myapp.service('cityService',function(){
	this.city = "Kalispell, MT";
});


myapp.service('weatherService', ['$resource',
function($resource) {
	weatherkey = weatherkey || '';
	this.GetWeather = function( city, days ) {
		var weatherAPI = $resource(
			// weatherkey is provided in weatherkey.js which is not provided with this app.  See note below.
			// the complete contents of weatherkey.js // 

			"http://api.openweathermap.org/data/2.5/forecast/daily?APPID="+weatherkey,
			{callback:"JSON_CALLBACK"}, {get: {method: "JSONP"}} 
		);
	
		return weatherAPI.get( {q:city, cnt: days} );		
	};
}]);


