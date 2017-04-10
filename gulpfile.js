const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');

gulp.task('scss', function () {
  gulp.src('./app/scss/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./app/static/css'));
});

gulp.task('webpack', function () {
  gulp.src('./app/js/main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./app/static/js'));
});

gulp.task('default', ['scss', 'webpack']);

gulp.task('watch', function () {
  gulp.watch([
    './app/js/*.js',
    './app/scss/*.scss'
  ], ['default']);
});
