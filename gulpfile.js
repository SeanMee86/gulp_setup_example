const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/*

-- REQUIREMENTS --

    Node Version >= 10

-- TOP LEVEL FUNCTIONS --

    gulp.task - Define tasks
    gulp.src - Point to files to use
    gulp.dest - Point to folder to output
    gulp.watch - Watch files and folders for changes

 */

// Optimize images

gulp.task('imageMin', async () => {
    gulp.src('src/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('dist/images'))
});

// Compile Sass

gulp.task('sass', async () => {
    gulp.src('src/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Scripts

gulp.task('scripts', async () => {
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', gulp.parallel(['imageMin', 'sass', 'scripts']));

gulp.task('watch', async () => {
    gulp.watch('src/js/*.js', gulp.parallel(['scripts']));
    gulp.watch('src/images/*', gulp.parallel(['imageMin']));
    gulp.watch('src/sass/**/*.scss', gulp.parallel(['sass']));
});