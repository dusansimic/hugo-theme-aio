const path = require('path');

const purgecss = require('@fullhuman/postcss-purgecss')({
	content: ['./hugo_stats.json'],
	defaultExtractor: content => {
		const els = JSON.parse(content).htmlElements;
		return els.tags.concat(els.classes, els.ids);
	}
});

module.exports = {
	plugins: [
		require('tailwindcss')(path.join(__dirname, 'tailwind.config.js')),
		require('autoprefixer')({path: [__dirname]}),
		...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])
	]
};
