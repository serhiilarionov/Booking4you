const gulp = require('gulp');
const sass = require('gulp-sass');
const cache = require('gulp-cached');
const remember = require('gulp-remember');
const browserSync = require('browser-sync').create();
const historyApiFallback = require('connect-history-api-fallback');

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    middleware: [historyApiFallback()],
    files: './stylesheets/**/*.css',
    port: 8000,
    open: false
  });

  gulp.watch(['./scripts/**/*.+(js|html|css)', './index.html']).on('change', browserSync.reload);
});

const sassPaths = ['scripts/**/*.scss'];
gulp.task('sass', function () {
  return gulp.src(sassPaths, {base: './'})
    .pipe(cache('sass'))
      .pipe(sass({
        includePaths: [
          'node_modules/bourbon/app/assets/stylesheets',
          'stylesheets'
        ]
      }).on('error', sass.logError))
    .pipe(remember('sass'))
    .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', ['sass'], function() {
  gulp.watch(sassPaths, ['sass']);
});

gulp.task('default', ['serve', 'sass:watch']);
