angular
	.module('myApp')
	.controller('businessByIdController', function($scope, $stateParams, dataFactory, $state) {
		$scope.business = {}
		$scope.commentArray = []
		dataFactory.getById($stateParams.id)
			.then(function(data) {
				$scope.commentArray = data[0]
				$scope.business = data[1][0]
			})
		dataFactory.getAllIndustries
			.then(function(data) {
				$scope.industries = data
			})
		$scope.editBusiness = function() {
			dataFactory.updateBusiness($scope.business).then(function() {
				$state.go('businessById', {
					id: $stateParams.id
				})
			})
		}
	})
