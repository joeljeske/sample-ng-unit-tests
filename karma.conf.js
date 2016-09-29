// jshint node: true
'use strict';

module.exports = {
  browsers: ['PhantomJS2', 'Chrome'],
  frameworks: ['jasmine'],
  reporters: ['mocha', 'coverage'],
  preprocessors: {
    'src/**/*.spec.js': [],
    'src/**/!(*spec).js': ['coverage']
  },
  coverageReporter: {
    type : 'html',
    dir: 'code-coverage/',
    subdir: function (browser) {
      return browser.toLowerCase().split(/[ /-]/)[0];
    },
  },
  autoWatch: true,
  singleRun: false,
  plugins: [
    'karma-jasmine',
    'karma-coverage',
    'karma-mocha-reporter',
    'karma-chrome-launcher',
    'karma-phantomjs2-launcher',
  ],
  files: [
    'bower_components/lodash/dist/lodash.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'test/**/*.js',
    'src/app.js',
    'src/**/!(*spec).js',
    'src/**/*.spec.js'
  ]
};
