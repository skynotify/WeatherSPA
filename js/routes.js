// ROUTES
myapp.config (function ($routeProvider){

    $routeProvider
    
    .when('/',{
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    .when('/weatherspa', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })

});
