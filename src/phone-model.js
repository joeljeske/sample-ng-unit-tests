angular.module('app', []).factory('phoneModel', function($http) {
  return {
    get: function() {
      return $http.get('/api/model')
        .then(function(response) {
          return response.data;
        });
    },
    update: function(oldVal, newVal) {
      return $http.post('/api/model', {oldVal: oldVal, newVal: newVal})
        .then(function(response) {
          return response.data;
        });
    }
  };
});
