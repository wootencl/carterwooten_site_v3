'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

//Project Paths:
var basePath = {
  src: 'app/',
  dest: 'dist/'
};
var srcPublic = {
  styles : basePath.src + '/public/css/',
  scripts: basePath.src + '/public/js/',
  images : basePath.src + '/public/images/'
};

var destPublic = {
  styles : basePath.dest + '/public/css/',
  scripts: basePath.dest + '/public/js/',
  images : basePath.dest + '/public/images/'
};

//Project Defaults and Functions:
var isDev = true;
var isProd = false;
var server;

var onError = function(err) {
  gutil.log(gutil.colors.green(err));
};

// ### DEVELOPMENT ###

//SASS TASK
gulp.task('sass', function() {
  return gulp.src(basePath.src + '/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(srcPublic.styles));
});

//JS
gulp.task('jshint', function() {
  return gulp.src([srcPublic.scripts + '**/*.js', '!' + srcPublic.scripts + 'vendor/**/*.js'])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(livereload());
});

//CSS TASK
gulp.task('css', function() {
  gulp.src(srcPublic.styles + '**/*.css')
    .pipe(livereload());
});

//HTML TASK
gulp.task('html', function() {
  gulp.src(basePath.src + 'public/**/*.html')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(livereload());
});

gulp.task('watch', function() {
  //SCSS
  gulp.watch([basePath.src + 'scss/**/*.scss'], ['sass']);

  //JS
  gulp.watch([srcPublic.scripts + '**/*.js'], ['jshint']);

  //CSS
  gulp.watch([srcPublic.styles + '**/*.css'], ['css']);

  //HTML
  gulp.watch([basePath.src + 'public/**/*.html'], ['html']);
});

gulp.task('server', function() {
  livereload.listen();

  nodemon({
    script: basePath.src + 'server.js',
    ext: 'js',
    ignore: srcPublic.scripts
  }).on('readable', function(){
    gulp.src(basePath.src + 'server.js')
      .pipe(livereload.reload());
  });
});

gulp.task('development', ['server', 'watch']);

/// ### PRODUCTION ###
//copy and minimize images
// gulp.task('copyImages', function() {
//   return gulp.src(srcPublic.images)
//     .pipe(newer(destPublic.images))
//     .pipe(imagemin())
//     .pipe(gulp.dest(destPublic.images));
// });

// gulp.task('jshint', function() {
//   return gulp.src('./app/public/js/**/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('jshint-stylish'));
// });

// gulp.task('watch', function() {
//   livereload.listen({ start: true, port: 35732 });
//   gulp.watch('./app/public/scss/**/.scss', ['sass']);
// });

