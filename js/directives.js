// Directives

myapp.directive(
	"weatherReport",
	function(){
		return {
			restrict: 'E',
			templateUrl: 'directives/weatherReport.html',
			scope: {
				wd: "=",
				conTemp: "&",
				conDate: "&",
				dateFormat: "@",
				cnt: "@"
			}
		}
	}
);
