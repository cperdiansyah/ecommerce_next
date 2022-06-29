module.exports = {
    important: true,
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],

    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            screen: {
                '2xl': '1320px',
            },
            colors: {
                primary: '#f97316',
                secondary: '#4b5563',
            },
        },
    },
    plugins: [],
}
