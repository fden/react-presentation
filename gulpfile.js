var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./app.js');
  return b.bundle()
    .pipe(source('all.js'))
    .pipe(gulp.dest('./build'));
});

 
gulp.task('scripts', ['clean'], function () {
    return gulp.src('components/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(sourcemaps.write('.'))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./build'));
});

 
gulp.task('clean', function () {
  return gulp.src('build/*', {read: false})
    .pipe(clean());
});

gulp.task('default', ['browserify']);