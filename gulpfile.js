'use strict';

const gulp = require('gulp');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const inject = require('gulp-inject');
const eslint = require('gulp-eslint');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

// everything you need for development
gulp.task('default', function (callback) {
  runSequence(
    'clean.dist',
    'test.js',
    'build.js',
    'build.sass',
    'fonts',
    'inject',
    callback
  );
});

// ready for publish
gulp.task('release', function (callback) {
  runSequence(
    'clean.dist',
    'build.js:release',
    'build.sass:release',
    'fonts',
    'inject:release',
    callback
  );
});

// Watch
// --------------------

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['build.sass']);
});

// Clean
// --------------------

gulp.task('clean.dist', function (callback) {
  return del('dist', callback);
});

// JavaScript
// --------------------

gulp.task('test.js', function () {
  return gulp.src([
    'js/**/*.js',

    // exclude
    '!js/analytics.js'
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('build.js', function () {
  return gulp.src([
    'js/**/*.js',

    // exclude
    '!js/analytics.js'
  ])
    .pipe(gulp.dest('dist'));
});

gulp.task('build.js:release', function () {
  return gulp.src('js/**/*.js')
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// HTML
// --------------------

gulp.task('inject', function () {
  var sources = gulp.src('dist/**/*.js');

  return gulp.src('*.html')
    .pipe(inject(sources, { relative: true }))
    .pipe(gulp.dest(''));
});

gulp.task('inject:release', function () {
  var sources = gulp.src('dist/*.js');

  return gulp.src('*.html')
    .pipe(inject(sources, { relative: true }))
    .pipe(gulp.dest(''));
});

// Fonts
// --------------------

gulp.task('fonts', function () {
  return gulp.src([
    'node_modules/@fortawesome/fontawesome-free-webfonts/webfonts/fa-regular-*',
    'node_modules/@fortawesome/fontawesome-free-webfonts/webfonts/fa-brands-*'
  ])
    .pipe(gulp.dest('dist'));
});

// Sass
// --------------------

gulp.task('build.sass', function () {
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist'));
});

gulp.task('build.sass:release', function () {
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist'));
});
