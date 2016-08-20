angular
	.module('myApp')
  .controller('addABusinessController', function($scope, dataFactory) {
	dataFactory.getAllIndustries.then(function(data) {
		console.log(data);
		$scope.industries = data;
	})




})
