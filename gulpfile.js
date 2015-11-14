var gulp = require('gulp');
var watchLess = require('gulp-watch-less');
var less = require('gulp-less');
var autoPre = require('gulp-autoprefixer');

gulp.task('default', function () {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(autoPre({browsers: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest('client'));
});
