/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				body: ['Parisienne'],
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')({ nocompatible: true })],
};
