var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src("src/stylesheets/scss/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/stylesheets'))
});

gulp.task('watch', function() {
  gulp.watch('src/stylesheets/scss/*.scss', ['sass']);
});
