module.exports = {
	theme: {
		fontFamily: {
			sans: ['Ubuntu', 'sans']
		},
		extend: {
			colors: {
				blurk: {
					400: '#161c26',
					DEFAULT: '#0d1117',
					600: '#080e17'
				},
				border: {
					light: '#e1e4e8',
					dark: '#30363d'
				},
				link: {
					light: '#0366d6',
					DEFAULT: '#0366d6',
					dark: '#58a6ff'
				}
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							color: theme('colors.current'),
							'&:hover': {
								color: theme('colors.link.DEFAULT')
							}
						},
						h1: {
							color: theme('colors.current')
						},
						h2: {
							color: theme('colors.current')
						},
						h3: {
							color: theme('colors.current'),
							fontWeight: '700'
						},
						h4: {
							color: theme('colors.current')
						}
					}
				},
				dark: {
					css: {
						color: theme('colors.gray.50'),
						a: {
							color: theme('colors.current'),
							'&:hover': {
								color: theme('colors.link.dark')
							}
						},
						h1: {
							color: theme('colors.current')
						},
						h2: {
							color: theme('colors.current')
						},
						h3: {
							color: theme('colors.current')
						},
						h4: {
							color: theme('colors.current')
						},
						strong: {
							color: theme('colors.current')
						}
					}
				}
			})
		}
	},
	variants: {
		extend: {
			typography: ['dark']
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	],
	darkMode: 'media'
};
