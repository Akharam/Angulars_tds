var app = angular.module("MainModule").config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'RouteController',
            controllerAs: 'rtCtrl1'
        }).
        when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'RouteController',
            controllerAs: 'rtCtrl2'
        });
    }]);angular.module("AutModule", ['ngRoute']);