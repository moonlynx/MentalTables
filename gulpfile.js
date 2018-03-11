const gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      connect = require('gulp-connect'),
      browserify = require('browserify'),
      babelify = require('babelify'),
      source = require('vinyl-source-stream');

const babelOpt = {
        presets: ['env', 'react']
      },

      serverOpt = {
        name: 'TestSrv',
        root: './app',
        host: 'localhost',
        port: '3001',
        livereload: true
      };

gulp.task('server', () => {
  return connect.server(serverOpt);
});

gulp.task('render', () => {
  return browserify({entries: 'dev/app.js'})
         .transform('babelify', babelOpt)
         .bundle()
         .pipe(source('game.min.js'))
         .pipe(gulp.dest('app/scripts'))
         .pipe(connect.reload());
});

gulp.task('minify', () => {
  return gulp.src('app/scripts/*.js')
         .pipe(uglify())
         .pipe(gulp.dest('app/scripts'));
});

gulp.task('css', () => {
  return gulp.src('dev/styles/*.css')
         .pipe(gulp.dest('app/styles/'));
});

gulp.task('html', () => {
   return gulp.src('dev/*.html')
          .pipe(gulp.dest('app/'))
          .pipe(connect.reload());
});

gulp.task('build', gulp.series(gulp.parallel('render', 'css', 'html'), 'minify'));

gulp.task('watch', () => {
  gulp.watch(['dev/*.html'], gulp.series('html'));
  gulp.watch(['dev/styles/*.css'], gulp.series('css'));
  gulp.watch(['dev/**/*.js'], gulp.series('render'));
});

gulp.task('default', gulp.parallel('server', 'watch', 'build'));