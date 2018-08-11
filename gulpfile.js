var gulp = require('gulp');
var cssMin = require('gulp-css');
var autoprefixer = require('gulp-autoprefixer');
var htmlclean = require('gulp-htmlclean');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

// Minify HTML
gulp.task('htmlMinify', function(){
    return gulp.src('src/*.html')
        .pipe(htmlclean())
        .pipe(gulp.dest('./public/'));
})

// Minify CSS
gulp.task('cssMinify', function(){
    return gulp.src('src/css/**/*.css')
        .pipe(cssMin())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
    }))
        .pipe(gulp.dest('./public/css'));
});

// Minify JS
gulp.task('jsMinify', function(){
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
});

// Optimize Images
gulp.task('imageMin', function(){
    return gulp.src('src/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/imgs'))
});

gulp.task('production', ['htmlMinify', 'cssMinify'], function(){
    gulp.watch('./src/css/**/*', ['cssMinfy'])
})