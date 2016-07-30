angular
.module('myApp')
.controller('businessController', function($scope, $http) {
  $http.get('http://localhost:3000/businesses').then(function(data) {
    console.log(data);
  })
})
