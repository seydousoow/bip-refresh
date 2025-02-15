/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/index.html',
        './src/**/*.{html,ts}'
    ],
    prefix: 'tw-',
    theme: {
        extend: {
            colors: {
                'lightGrey': '#F2F2F2'
            },

            fontFamily: {
                sans: ['Ubuntu', 'Open Sans', 'Roboto', 'Helvetica', 'sans-serif'],
                serif: ['serif'],
            }
        },
    },
    plugins: [require('tailwindcss-primeui'), 'prettier-plugin-tailwindcss']
}

