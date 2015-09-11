var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('styles', function() {
	gulp.src('./scss/styles.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 version']
		}))
		.pipe(gulp.dest('./css'));
});


gulp.task('serve', ['styles'], function() {
	browserSync({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('./scss/.*scss', ['sass']);
});
