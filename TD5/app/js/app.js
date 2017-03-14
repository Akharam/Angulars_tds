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
    }]).factory("config", function () { return {nom: "Mutlti-Modules APP", version: "1.0", paths:{"/":[{caption:"Se connecter", href:"/login"}]}};}
    
);
angular.module("AutModule", ['ngRoute']);