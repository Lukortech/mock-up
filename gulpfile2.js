const { src, dest, parallel } = require('gulp');

const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

function sass() {
  return src('client/templates/*.less')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('/assets/css'))
}

function js() {
  return src('/assets/js/*.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('assets/js', { sourcemaps: true }))
}

exports.js = js;
exports.sass = sass;
exports.default = parallel(sass, js);