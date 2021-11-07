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
		extend: {
			fontFamily: { sans: ['Poppins'] },
			colors: {
				'dark-1': '#13111A',
				'dark-2': '#302C3F',
				'dark-3': '#5E5B71',
				'dark-4': '#1D1A27',
				'blue-dark': '#164F85',
				'red-dark': '#AB1818',
			},
			dropShadow: {
				'blue-dark': '0 25px 25px rgba(255, 255, 255, 1)',
			},
			backgroundImage: {
				'shade-pattern': "url('/assets/bg_shade.svg')",
			},
			maxWidth: {
				'1/4': '25%',
				'1/2': '50%',
				'3/4': '75%',
				'9/10': '90%',
			},
		},
	},
	variants: {
		extend: {
			dropShadow: ['hover'],
			backgroundImage: ['group-hover', 'hover'],
		},
	},
	plugins: [],
}
