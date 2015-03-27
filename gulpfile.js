var gulp = require('gulp');

var uglify = require('gulp-uglify');

gulp.task('deploy-bower', function() {
    gulp.src('bower_components/bootstrap/dist/js/bootstrap.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/vendor/bootstrap'));
    gulp.src('bower_components/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('dist/css/vendor/bootstrap'));
    gulp.src('bower_components/bootstrap/dist/css/bootstrap.theme.min.css')
        .pipe(gulp.dest('dist/css/vendor/bootstrap'));

    gulp.src('bower_components/jquery/dist/jquery.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/vendor/jquery'));

});

gulp.task('default', function() {
  // place code for your default task here
});
