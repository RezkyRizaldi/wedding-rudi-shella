/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			fontFamily: {
				body: ['Parisienne'],
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
