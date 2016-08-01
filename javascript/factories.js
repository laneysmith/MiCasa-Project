angular
  .module('myApp')
  .factory('dataFactory', ['$http', '$q', function($http, $q){
    return {
      getAll:
        $http.get('http://localhost:3000/businesses')
        .then(function(data) {
          let results = data.data
          return $q.resolve(results)
        }),
      getById: function(id) {
        return $http.get('http://localhost:3000/businesses/' + id)
        .then(function(data) {
          let business = data.data
            return $q.resolve(business)
        })
      }
    }
  }])
