const gulp = require('gulp');
const compass = require('gulp-compass');
const browserSync = require('browser-sync').create();
const mainStyleFiles = ['./stylesheets/scss/style.scss', './stylesheets/scss/colors/brown.scss', './stylesheets/scss/rtl.scss'];

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 8000,
    open: false
  });

  gulp.watch('./stylesheets/scss/**/*.scss', ['compass']);
  gulp.watch('./**/*.{html,js}').on('change', browserSync.reload);
});

gulp.task('compass', function() {
  gulp.src(mainStyleFiles)
    .pipe(compass({
      config_file: './config.rb',
      sass: 'stylesheets/scss',
      css: 'stylesheets/css',
      sourcemap: true
    }))
    .pipe(gulp.dest('./stylesheets/css'))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('default', ['serve']);
