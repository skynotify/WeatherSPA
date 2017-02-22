// CONTROLLERS

/* Home Controller */
myapp.controller('homeController', ['$scope', 'cityService', '$location',
function($scope, cityService, $location){ 
	$scope.title = 'Home Page';
	$scope.city = cityService.city;
	$scope.days = 4;
	$scope.$watch('city',function(){
		cityService.city = $scope.city;
	});
	$scope.submit = function(days){
		$location.path("/forecast/" + days);
	};
}]);
