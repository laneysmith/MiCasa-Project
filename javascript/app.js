angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      controller: "businessController",
      templateUrl: "templates/business.html"
    })
    .state('businessById', {
      url: '/:id',
      controller: "businessByIdController",
      templateUrl: "templates/business-by-id.html"
    })
  $locationProvider.html5Mode(true);


  });
