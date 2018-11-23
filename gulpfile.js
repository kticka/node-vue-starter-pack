const gulp           = require('gulp');
const webpack_stream = require('webpack-stream');
const webpack_plugin = require('webpack');
const rename         = require('gulp-rename');
const sass           = require('gulp-sass');
const browsersync    = require('browser-sync').create();
const nodemon        = require('nodemon');
const {
        webpack_config,
        browsersync_config,
      }              = require('./config');


const production    = process.argv.indexOf('--production') > -1;
webpack_config.mode = production ? 'production' : 'development';

gulp.task('javascript', function () {
  return gulp.src(webpack_config.entry)
    .pipe(webpack_stream(webpack_config, webpack_plugin).on('error', function () {
      this.emit('end');
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./build/js'))
});


gulp.task('stylesheets', function () {
  return gulp.src('./app/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
    .pipe(browsersync.stream())
});

gulp.task('serve', ['javascript', 'stylesheets'], function () {

  browsersync.init(browsersync_config);

  gulp.watch('./app/scss/**/*.scss', ['stylesheets']);
  gulp.watch('./app/js/**/*', ['javascript']);
  gulp.watch(['./build/js/app.js', './app/views/**/*', './server.js'], function () {
    nodemon.emit('restart');
  });

  return nodemon({
    script: 'server.js',
    watch:  [],
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', (data) => {
      if (data.toString().search('Server listening on') > -1) {
        browsersync.reload();
      }
    });
  });
});


if (process.argv.indexOf('--production') < 0) {
  gulp.task('default', ['serve']);
} else {
  gulp.task('default', ['javascript', 'stylesheets']);
}
