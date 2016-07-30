angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      controller: "businessController",
      templateUrl: "templates/business.html"
    })
  $locationProvider.html5Mode(true);


  });
