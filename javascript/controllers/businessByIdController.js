angular
.module('myApp')
.controller('businessByIdController', function($scope, $http, $stateParams) {
  $scope.business = {}
  $scope.commentArray = []
  $http.get('http://localhost:3000/businesses/' + $stateParams.id).then(function(data) {
    $scope.commentArray = data.data[0]
    console.log($scope.commentArray);
    $scope.business = data.data[1][0]
  })
  // REFACTOR THESE HTTP REQUESTS TO A SERVICE
})
