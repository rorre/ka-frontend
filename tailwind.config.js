module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1080px',
			},
		},
		extend: {
			fontFamily: { sans: ['Poppins'] },
			colors: {
				'dark-1': '#13111A',
				'dark-2': '#302C3F',
				'dark-3': '#5E5B71',
				'dark-4': '#1D1A27',
				'blue-dark': '#164F85',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
