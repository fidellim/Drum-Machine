/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                darkBlue: 'var(--darkBlue)',
                darkGreen: 'var(--darkGreen)',
                lightGray: 'var(--lightGray)',
                lightBlue: 'var(--lightBlue)',
            },
        },
    },
    plugins: [],
}
