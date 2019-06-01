//Deklaracja zmiennych
var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var browserSync = require('browser-sync').create();

//Definicja tasków
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
    baseDir: 'app'
    },
  })
})

gulp.task('sass', () => {
  return gulp.src('assets/css/*.scss')
  .pipe(sass()) // Converts Sass to CSS with gulp-sass
  .pipe(gulp.dest('assets/css'))
  .pipe(browserSync.reload({
    stream: true
    }))
});

gulp.task('images', function () {
  return gulp.src('assets/images/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('assets/images/processed'))
});

gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('assets/sass/**/*.scss', ['sass']);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('assets/js/*.js', browserSync.reload);
});


// continue on : 
// https://codeburst.io/switching-to-gulp-4-0-271ae63530c0