const app = angular.module('myApp', [])
.controller('firstController', function($scope, $http) {
  $http.get('http://localhost:3000').then(function(data) {
    console.log(data);
  })
})
