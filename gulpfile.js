var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compile', function() {
  return gulp.src("sass/*.scss")
  .pipe(gulp.dest("css"))
 });

 gulp.task('default1', function() {
  gulp.watch("sass/*.scss",["compile"]);
 
 });