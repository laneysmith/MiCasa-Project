angular
	.module('myApp')
	.factory('dataFactory', ['$http', '$q', function($http, $q) {
		return {
			getAll:
			function () {
				return $http.get('http://localhost:3000/businesses')
				.then(function(data) {
					let results = data.data
					console.log(results);
					return $q.resolve(results)
				})
			},
			getById: function(id) {
				return $http.get('http://localhost:3000/businesses/' + id)
					.then(function(data) {
						let business = data.data
						return $q.resolve(business)
					})
			},
			updateBusiness: function(body) {
				newData = {
					'id': body.business_id,
					'name': body.name,
					'address1': body.address1,
					'city': body.city,
					'state': body.state,
					'zip': body.zip,
					'email': body.email,
					'phone': body.phone,
					'industry_id': body.industry_id,
					'date_opened': body.date_opened,
					'date_closed': body.date_closed,
					'good_standing': body.good_standing,
					'description': body.description,
					'website': body.website
				}
				return $http.put('http://localhost:3000/businesses/' + body.business_id, newData)
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
