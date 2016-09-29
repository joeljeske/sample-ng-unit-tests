
directiveTest({
  module: angular.module('app'),
  name: 'phonebookDirective',
  template: '<phonebook phone-numbers="testNumbers"></phonebook>',
  controller: 'phonebook',
  // Selector based assertions. Key (CSS selector) should contain Value (Number) of matches
  selectors: {
    'phonenumber': 0
  },
  // Custom assertions. Functions are injectable
  assertions: {
    'create phone numbers for each entry': function($element, $scope) {
      $scope.testNumbers = ['0', '1', '2'];
      $scope.$apply();
      expect($element.find('phonenumber').length).toBe(3);
    },
    'expose refresh numbers on scope': function($element) {
      var isolate = $element.isolateScope();
      expect(isolate.refresh).toBeDefined();
    },
    'should delegate to phone model': function($element, $scope, phoneModel, $q) {
      var isolate = $element.isolateScope();
      var testNumbers = ['0', '1', '2'];
      spyOn(phoneModel, 'get').and.callFake(function() {
        return $q(function(resolve) {
          resolve(testNumbers);
        });
      });

      isolate.refresh();
      $scope.$apply();

      expect($scope.testNumbers).toEqual(testNumbers);
    }
  }
});
