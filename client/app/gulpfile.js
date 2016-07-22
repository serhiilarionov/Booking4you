const gulp = require('gulp');
const compass = require('gulp-compass');
const browserSync = require('browser-sync').create();

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    files: './**/*.css',
    port: 8000
  });

  gulp.watch(['./scripts/**/*.{js,html}', './index.html']).on('change', function(file) {
    browserSync.reload(file.path)
  });
});

gulp.task('compass', function() {
  gulp.src('./stylesheets/scss/**/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      sass: './stylesheets/scss',
      css: './stylesheets/css',
      task: 'watch',
      sourcemap: true
    }))
    .pipe(gulp.dest('./stylesheets/css'));
});

gulp.task('default', ['serve', 'compass']);
