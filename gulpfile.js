const { task, src, dest, series, watch } = require('gulp');
const postcss = require('gulp-postcss');
const stripCssComments = require('gulp-strip-css-comments');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const cleanCssConfig = require('./clean-css.config');

task('css', () => {
	return src('assets/css/styles.css')
		.pipe(postcss([
			require('tailwindcss')('./tailwind.config.js'),
			require('autoprefixer')
		]))
		.pipe(stripCssComments({ preserve: false }))
		.pipe(cleanCSS(cleanCssConfig))
		.pipe(dest('static/css/'));
});

task('js', () => {
	return src('assets/js/*.js')
		.pipe(minify())
		.pipe(dest('static/js/'));
});

task('stare', () => watch(['layouts/**/*.html', 'assets/**/*'], series('css', 'js')))

task('default', series('css', 'js'));
