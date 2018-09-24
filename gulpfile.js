const gulp = require('gulp');

gulp.task('distribute', function() {
  return gulp.src('./FabricationUI/dist/*')
    .pipe(gulp.dest('./dist'));
});

