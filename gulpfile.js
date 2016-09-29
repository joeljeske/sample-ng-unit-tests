// jshint node:true
'use strict';

var
  gulp = require('gulp'),
  Server = require('karma').Server,
  config = require('./karma.conf.js');

gulp.task('test', function (done) {
  new Server(config, done).start();
});
