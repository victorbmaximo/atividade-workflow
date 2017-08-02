var gulp = require('gulp');
var sass = require('gulp-sass');
var unify = require('gulp-concat');
var miniCSS = require('gulp-mini-css');
var minHTML = require('gulp-htmlmin');

//Diretorios origem
var scssOrigin = './source/scss/*.scss';
var htmlOrigin = './source/index.html';


//Diretorios destino
var scssDest = './dist/css';
var cssUnified = 'screen.css';
var htmlDest = './dist';

gulp.task('sass-compiler', function(){
  return gulp.src(scssOrigin)
    .pipe(sass())
    .pipe(unify(cssUnified))
    .pipe(miniCSS())
    .pipe(gulp.dest(scssDest))
});

gulp.task('html-minifier', function() {
    return gulp.src(htmlOrigin)
    .pipe(minHTML({collapseWhitespace: true}))
    .pipe(gulp.dest(htmlDest))  
});

gulp.task('background', function() {
    gulp.watch(scssOrigin, ['sass-compiler']);
    gulp.watch(htmlOrigin, ['html-minifier']);
});