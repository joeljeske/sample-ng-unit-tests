/* global ddescribe, _ */
// jshint globalstrict:true
'use strict';

/**
 * This is a factory that can be used to generate test suites
 * and assertions for directives.
 *
 * Options:
 * module {AngularModule} Module to load before each test
 * template {String|Element} HTML template or element to compile
 * [config] {Function} If present, it will be passed to angular.mock.module during the setup. Useful for mocking or decorating services
 * [focus=false] {Boolean} True, if should focus only on this test (ddescribe)
 * [controller] {String} Optional controller to assert its existance on the root element
 * [assertions] {Object} Object of assertions to run. Object should be in the form {'should perform task': function($element) {...}}
 * The key should the it() description and the value should be a function that is injected via angular. It has psuedo injectables
 * including $element and $scope
 * [selectors] {Object} Object of selector assertions with the key being the css selector and the value being the number
 * of expected elements that match the selector
 *
 * Simple Example:
 ```
  var directiveTest = require('test.factory.directive');

  // Asserts that the template compiles and then contains the controller for the directive
  directiveTest({
    module: require('./index.js'),
    name: 'acpContactsList',
    template: '<acp-contacts-list></acp-contacts-list>',
    controller: 'acpContactsList'
  });
 ```
 *
 * Example:
 ```
  var directiveTest = require('test.factory.directive');

  // Asserts same as simple example and also run all the assertions
  directiveTest({
    module: require('./index.js'),
    name: 'acpContactsList',
    template: '<acp-contacts-list></acp-contacts-list>',
    controller: 'acpContactsList',
    assertions: {
      'that the inner scope should contain a value': function($element, $scope) {
        expect($element.isolateScope().testValue).toBe('test-value');
      }
    }
  });
```
 *
 * Selector Example:
 ```
  var directiveTest = require('test.factory.directive');

  // Asserts same as simple example and also assert all the selectors
  directiveTest({
    module: require('./index.js'),
    name: 'acpContactsList',
    template: '<acp-contacts-list></acp-contacts-list>',
    controller: 'acpContactsList',
    selectors: {
      'md-list': 1, // There should be 1 md-list
      'md-item': 4 // There should be 4 md-items
    }
  });
```
 *
 */
function directiveTest(options) {
  var describeFactory = options.focus ? ddescribe : describe;

  var selectorAssertions = _.transform(options.selectors, function(assertions, count, selector) {
    assertions['should have ' + count + ' matche(s) for selector "' + selector + '"'] = function($element) {
      var parent = document.createElement('div');
      parent.appendChild($element[0]);
      var matches = parent.querySelectorAll(selector);
      try {
        expect(matches).toBeDefined();
        expect(matches.length).toEqual(count);
      } finally {
        parent.removeChild($element[0]);
      }
    };
  }, {});

  var assertions = angular.extend({}, options.assertions, selectorAssertions);

  describeFactory('Directive: ' + options.name, function() {
    var
      $i,
      $compile,
      $scope,
      $element;

    beforeEach(module(options.module.name));
    beforeEach(inject(function($rootScope, $injector) {
      if (options.config) {
        angular.mock.module(options.config);
      }

      $i = $injector;
      $compile = $i.get('$compile');
      $scope = $i.get('$rootScope').$new();

      $element = $compile(options.template)($scope);
      $rootScope.$apply();
    }));

    afterEach(function() {
      $i = $compile = $scope = $element = null;
    });

    it('should exist', function() {
      expect($element).toBeDefined();
    });

    if (options.controller) {

      it('should contain the controller: ' + options.controller, function() {
        expect($element.controller(options.controller)).toBeDefined();
      });

    }

    _.each(assertions, function(assertion, description) {

      it(description, function() {
        $i.invoke(assertion, this, {
          $element: $element,
          $scope: $scope
        });
      });

    });

  });

}

