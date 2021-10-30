module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '640px',
			'2xs': '150px',
			'2sm': '430px',
			'3sm': { max: '430px' },

			// => @media (min-width: 640px) { ... }

			md: '768px',
			'2md': '880px',
			'3md': { max: '880px' },
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		maxWidth: {
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
