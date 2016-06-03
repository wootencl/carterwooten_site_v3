'use strict';

import gulp from 'gulp';
import sass from'gulp-sass';
import jshint from 'gulp-jshint';
import gutil from 'gulp-util';
import plumber from 'gulp-plumber';
import newer from 'gulp-newer';
import imagemin from 'gulp-imagemin';
import sourcemaps from 'gulp-sourcemaps'; //used for debugging
import nodemon from 'gulp-nodemon';
import livereload from 'gulp-livereload';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import assign from 'object-assign';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import gulpif from 'gulp-if';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import order from 'gulp-order';
import ng2TemplateParser from 'gulp-inline-ng2-template/parser';
import through from 'through2';

//Project Paths:
var basePath = {
  src: 'app/',
  dest: 'dist/'
};
var srcPublic = {
  styles : basePath.src + 'public/css/',
  scripts: basePath.src + 'public/js/',
  images : basePath.src + 'public/images/'
};

var destPublic = {
  styles : basePath.dest + 'public/css/',
  scripts: basePath.dest + 'public/js/',
  images : basePath.dest + 'public/images/'
};

//Project Defaults and Functions:
var isDev = true;
var isProd = false;
var server;

var onError = function(err) {
  gutil.log(gutil.colors.green(err));
};

function bundle(brfy, lr) {
  return brfy.bundle()
    .on('error', (e) => {
      console.error(e.stack);
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(srcPublic.scripts))
    .pipe(gulpif(lr, livereload()));
}

// ### DEVELOPMENT ###

//SASS TASK
gulp.task('sass', function() {
  return gulp.src(basePath.src + '/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(srcPublic.styles));
});

//JS
gulp.task('jshint', function() {
  return gulp.src([srcPublic.scripts + '**/*.js', '!' + srcPublic.scripts + 'vendor/**/*.js', '!' + srcPublic.scripts + 'bundle.js'])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(livereload());
});

//CSS TASK
gulp.task('css', function() {
  return gulp.src(srcPublic.styles + '**/*.css')
    .pipe(livereload());
});

//HTML TASK
gulp.task('html', function() {
  return gulp.src(basePath.src + 'public/**/*.html')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(livereload());
});

//client-app TASKS
gulp.task('angular-build', function() {
  const brfy = browserify(basePath.src + 'client-app/index.js', { debug: true })
    .transform(babelify)
    .transform(function (file) {
      return through(function (buf, enc, next){
        var result = ng2TemplateParser({contents: buf, path: file}, {target: 'es5'});
        this.push(result);
        next();
      });
    });
  return bundle(brfy, false);
});

gulp.task('angular-watch', function() {
  const brfy = browserify(basePath.src + 'client-app/index.js', assign({ debug: true }, watchify.args ))
    .transform(babelify);
  const wfy = watchify(brfy)
    .on('update', () => bundle(wfy, true))
    .on('log', gutil.log);
  return bundle(wfy, true);
});

//WATCH TASK
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

//SERVER TASK
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

gulp.task('development', ['server', 'watch', 'angular-watch']);

/// ### PRODUCTION ###

//IMAGE MINIFICATION
gulp.task('minify-images', function() {
  return gulp.src(srcPublic.images)
    .pipe(newer(destPublic.images))
    .pipe(imagemin())
    .pipe(gulp.dest(destPublic.images));
});

//CSS MINIFICATION
gulp.task('minify-css', function() {
  return gulp.src(srcPublic.styles + '*.css')
    .pipe(sourcemaps.init())
      .pipe(concat('app.min.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(destPublic.styles));
});

//JS MINIFICATION
gulp.task('minify-js', function() {
  return gulp.src([
      srcPublic.scripts + 'vendor/jquery.js', //jquery before b/c foundation dependency
      srcPublic.scripts + '**/*.js'
    ])
    .pipe(sourcemaps.init())
      .pipe(concat('bundle.min.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(destPublic.scripts));
});

//COPY TASKS
gulp.task('copy', function() {
  gulp.src(basePath.src + 'public/index.html')
    .pipe(gulp.dest(basePath.dest + 'public/'));

  gulp.src(basePath.src + 'server.js')
    .pipe(gulp.dest(basePath.dest));

  gulp.src(basePath.src + 'serverObjects/*.js')
    .pipe(gulp.dest(basePath.dest + 'serverObjects/'));
});

gulp.task('production', ['minify-images', 'minify-css', 'minify-js', 'copy']);



