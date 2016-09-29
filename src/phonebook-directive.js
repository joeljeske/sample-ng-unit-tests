angular.module('app').directive('phonebook', function(phoneModel) {

  return {
    restrict: 'E',
    scope: {
      phoneNumbers: '='
    },
    template: '<phonenumber ng-repeat="number in phoneNumbers">{{number}}</phonenumber>',
    controller: function($scope) {
      $scope.refresh = function() {
        phoneModel.get()
          .then(function(numbers) {
            $scope.phoneNumbers = numbers;
          });
      };
    }
  };
});
