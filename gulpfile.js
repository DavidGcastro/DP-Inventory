var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var cssImport = require("postcss-import");


gulp.task('watch', function(){
   watch('./index.html', function(){
      gulp.start('html');
   });
    
//on save do this
    
gulp.task('html', function(){
    console.log('I am watching html');
});


 watch('./styles/modules/*.css', function(){
        gulp.start('styles');
    })
});


gulp.task('styles', function(){
   return gulp.src('./styles/source.css')
    .pipe(postcss([cssImport]))
    .pipe(gulp.dest('./styles/temp/'));
    
});