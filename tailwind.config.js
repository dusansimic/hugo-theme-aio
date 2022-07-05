module.exports = {
	content: ['./layouts/**/*.html'],
	theme: {
		fontFamily: {
			sans: ['Ubuntu', 'sans']
		},
		extend: {
			maxWidth: {
				'65ch': '65ch'
			},
			typography: {
				DEFAULT: {
					css: {
						a: {
							color: 'hsl(var(--p))',
							'&:hover': {
								color: 'hsl(var(--pf))',
							},
						},
						'a *': {
							color: 'hsl(var(--p))',
							'&:hover': {
								color: 'hsl(var(--pf))',
							},
						},
					},
				},
			},
		},
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography'),
	],
	daisyui: {
		themes: [
			{
				simply: {
					"primary": "#3b82f6",
					"secondary": "#93c5fd",
					"accent": "#3b82f6",
					"neutral": "#57534e",
					"base-100": "#1c1917",
					"info": "#bfdbfe",
					"success": "#22c55e",
					"warning": "#eab308",
					"error": "#dc2626",
				},
			},
		],
	},
};
