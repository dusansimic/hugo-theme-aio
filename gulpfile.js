const {task, src, dest, series, watch} = require('gulp');
const postcss = require('gulp-postcss');
const stripCssComments = require('gulp-strip-css-comments');
const cleanCSS = require('gulp-clean-css');
const cleanCssConfig = require('./clean-css.config');

task('css', () => {
	return src('assets/css/styles.css')
		.pipe(postcss([
			require('tailwindcss')('./tailwind.config.js'),
			require('autoprefixer')
		]))
		.pipe(stripCssComments({preserve: false}))
		.pipe(cleanCSS(cleanCssConfig))
		.pipe(dest('static/css/'));
});

task('stare', () => watch('layouts/**/*.html', series('css')))

task('default', series('css'));
