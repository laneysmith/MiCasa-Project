angular
	.module('myApp')
	.controller('businessByIdController', function($scope, $stateParams, dataFactory) {
		$scope.business = {}
		$scope.commentArray = []
		dataFactory.getById($stateParams.id)
			.then(function(data) {
				$scope.commentArray = data[0]
				console.log(data)
				$scope.business = data[1][0]
			})
		dataFactory.getAllIndustries
			.then(function(data) {
				$scope.industries = data
			})
		$scope.editBusiness = function() {

			console.log("WORKING");
		console.log($scope.business);
		}
	})
