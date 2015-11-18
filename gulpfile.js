var gulp = require('gulp'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifycss = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html'),
    imagemin = require('gulp-imagemin'),
    merge = require('merge-stream'),
    del = require('del');

gulp.task('styles', function(){
  var rootCSS =
    gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/css'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'));

  var viewsCSS =
    gulp.src('src/views/css/*.css')
    .pipe(gulp.dest('dist/views/css'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/views/css'));

  return merge(rootCSS, viewsCSS);
});

gulp.task('scripts', function(){
  var rootJS =
    gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));

  var viewsJS =
    gulp.src('src/views/js/*.js')
    .pipe(gulp.dest('dist/views/js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/views/js'));

  return merge(rootJS, viewsJS);
});

gulp.task('images', function(){
  var rootImg =
    gulp.src('src/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));

  var viewsImg =
    gulp.src('src/views/images/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/views/images'));

  return merge(rootImg, viewsImg);
});

gulp.task('html', function(){
  var rootHTML =
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(minifyHTML())
    .pipe(gulp.dest('dist'));

  var viewsHTML =
    gulp.src('src/views/*.html')
    .pipe(gulp.dest('dist/views'))
    .pipe(minifyHTML())
    .pipe(gulp.dest('dist/views'));

  var htaccess =
    gulp.src('src/.htaccess')
    .pipe(gulp.dest('dist'));

  return merge(rootHTML, viewsHTML, htaccess);
});

gulp.task('clean', function(){
  return del(['dist']);
});

gulp.task('default', ['clean'], function(){
  gulp.start('styles', 'scripts', 'images', 'html');
});
