angular
.module('myApp')
.controller('businessController', function($scope, dataFactory) {
   dataFactory.getAll
    .then(function(data){
        $scope.resultArray = data
    })
})
