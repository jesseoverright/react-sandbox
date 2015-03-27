var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var rename = require('gulp-rename');
var source = require("vinyl-source-stream");
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

gulp.task('browserify', function() {
    var b = browserify();
    b.transform(reactify);
    b.add('./src/index.jsx');

    return b.bundle()
        .pipe(source('./src/index.jsx'))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./dist/js'));

});
