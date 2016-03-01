var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    reactify = require('reactify'),
    package = require('./package.json'),
    nodemon = require('nodemon'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');

gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload());
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/scss/*.scss', ['sass']);
});




gulp.task('bundle', function() {
    return browserify(package.paths.app)
        .transform('reactify', {stripTypes: true, es6: true})
        .bundle()
        .pipe(source(package.dest.app))
        .pipe(gulp.dest(package.dest.dist))
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['src/**/*.js', 'src/**/*.jsx'],['bundle']);
    gulp.watch('./src/scss/*.scss', ['sass']);

});

gulp.task('nodemon', function () {
    nodemon({
        script: 'bin/www', ext: 'js jsx jade',ignore:["public/scripts/react/*"]
    });
});

gulp.task('default', ['bundle', 'sass', 'watch']);