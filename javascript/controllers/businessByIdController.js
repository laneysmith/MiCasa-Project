angular
.module('myApp')
.controller('businessByIdController', function($scope, $http, $stateParams) {
  $scope.business = {}
  $http.get('http://localhost:3000/businesses/' + $stateParams.id).then(function(data) {
    $scope.business = data.data[0]
  })
})
