/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                'grayish': '#f1f1f1',
                'gray': '#c1c1c1',
                'lavender': '#C7F0BD',
                'ghost-white': '#E0F1DC',
                'gud-green': '#b8e0d2',
                'bad-green': '#8DBDAD',
                'error': '#FF5E5B'
            }
        },
    },
    plugins: [],
};

