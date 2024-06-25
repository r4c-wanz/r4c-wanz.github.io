/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: '#7868E6',
                black: '#121212',
                grey: '#929292',
                lightgrey: '#C7C9D9',
            },
            fontFamily: {
                'inter': 'Inter',
            }
        },
    },
    plugins: [],
}