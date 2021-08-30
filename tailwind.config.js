const round = (num) =>
	num
		.toFixed(7)
		.replace(/(\.[0-9]+?)0+$/, '$1')
		.replace(/\.0$/, '');
const em = (px, base) => `${round(px/base)}em`;

module.exports = {
	purge: {
		enabled: true,
		content: ['./layouts/**/*.html'],
		options: {
			safelist: [
				...(['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'].reduce(
					(accum, color) => [...accum, `bg-${color}-800`, `hover:bg-${color}-700`, `text-${color}-100`],
					[]
				))
			],
			keyFrames: true
		}
	},
	theme: {
		fontFamily: {
			sans: ['Ubuntu', 'sans']
		},
		extend: {
			backgroundImage: () => ({
				'blob-pattern': "url('/svg/blob.svg')",
			}),
			boxShadow: {
				pill: '0 0 0 0 rgba(59, 130, 246, 0.3)',
				'pill-lg': '0 0 0 4px rgba(59, 130, 246, 0.3)'
			},
			transitionDuration: {
				35: '35ms'
			},
			transitionProperty: {
				'box-shadow': 'box-shadow'
			},
			width: {
				prose: '65ch'
			},
			minHeight: {
				96: '24rem'
			},
			colors: {
				blurk: {
					300: '#202938',
					400: '#161c26',
					DEFAULT: '#0d1117',
					600: '#080e17'
				},
				link: {
					bg: 'rgba(59, 130, 246, 0.3)',
				},
				border: {
					light: '#e1e4e8',
					dark: '#30363d'
				},
				gray: {
					'100': '#F8F8F8',
					'200': '#E0E0E0',
					'300': '#C8C8C8',
					'400': '#888888',
					'500': '#707070',
					'600': '#505050',
					'700': '#383838',
					'800': '#282828',
					'900': '#101010',
				},
			},
			typography: theme => ({
				DEFAULT: {
					css: {
						a: {
							color: theme('colors.color.600'),
							textDecoration: 'none'
						},
						h1: {
							color: theme('colors.current')
						},
						h2: {
							marginTop: '1rem',
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
							color: theme('colors.blue.500'),
							transitionProperty: theme('transitionProperty.box-shadow'),
							transitionTimingFunction: theme('transitionTimingFunction.ease-in-out'),
							transitionDuration: theme('transitionDuration.35'),
							backgroundColor: theme('backgroundColor.link.bg'),
							borderRadius: theme('borderRadius.md'),
							textDecoration: theme('textDecoration.no-underline'),
							padding: '0.25rem 0.5rem 0.25rem 0.5rem',
							boxShadow: theme('boxShadow.pill'),
							'&:hover': {
								boxShadow: theme('boxShadow.pill-lg')
							},
							'&[class~=link-button]': {
								borderRadius: theme('borderRadius.full'),
								padding: '0.75rem 1rem 0.75rem 1rem'
							},
							'&[class~=link-title]': {
								color: theme('colors.current'),
								transitionProperty: theme('transitionProperty.none'),
								backgroundColor: theme('backgroundColor.current'),
								borderRadius: theme('borderRadius.none'),
								padding: '0 0 0 0',
								boxShadow: theme('boxShadow.none')
							}
						},
						h1: {
							color: theme('colors.current')
						},
						h2: {
							color: theme('colors.current')
						},
						'.nextprev h2': {
							fontWeight: 'bold'
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
