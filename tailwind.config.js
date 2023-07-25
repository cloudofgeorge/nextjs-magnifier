/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    plugins: [],
    theme: {
        extend: {
            colors: {
                'color-10': '#E9E9F2',
                'color-20': '#0D0D0D',
                'color-30': '#27282C',
                'color-40': '#602BE9',
            },
            borderRadius: {
                large: '1.583vw',
            },
        },
    },
};
