var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
const cssScss = require('gulp-css-scss');

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'bourbon-practice'
    }
  });

  gulp.watch(['index.html', 'lib/css/styles.css', 'lib/css/styles2.css', 'lib/js/practice-functions.js'], {cwd: 'app'}, reload);
});

gulp.task('css-scss', () => {
  return gulp.src('lib/css/styles.css')
    .pipe(cssScss())
    .pipe(gulp.dest('lib/scss'));
});
 
gulp.task('default', ['css-scss']);