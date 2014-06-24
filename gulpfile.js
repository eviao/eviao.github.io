var gulp = require('gulp');
var less = require('gulp-less');

var rimraf = require('rimraf');

var paths = {
  less: 'assets/less/main.less'
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm
gulp.task('clean', function(cb){
  rimraf('assets/css', cb);
});

gulp.task('less',['clean'], function () {
  gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest('assets/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['less','watch']);