angular
	.module('myApp')
	.factory('dataFactory', ['$http', '$q', function($http, $q) {
		return {
			getAll: $http.get('http://localhost:3000/businesses')
				.then(function(data) {
					let results = data.data
					console.log(results);
					return $q.resolve(results)
				}),
			getById: function(id) {
				return $http.get('http://localhost:3000/businesses/' + id)
					.then(function(data) {
						let business = data.data
						return $q.resolve(business)
					})
			},
			getAllIndustries: $http.get('http://localhost:3000/businesses/industries')
				.then(function(data) {
					let results = data.data
					return $q.resolve(results)
				}),
			getAllCities: $http.get('http://localhost:3000/businesses/cities')
				.then(function(data) {
					let results = data.data
					return $q.resolve(results)
				})
		}
	}])
