module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        colors: {
            'accent': '#FFCC29',
            'primary':'#284786',
            'secondary':'#2AA9A6',
            'secondary-50':'#52C7C4'

        },
        extend: {},
    },
    plugins: [
        require('tailwindcss-rtl'),
        require('@tailwindcss/forms'),
        require('flowbite/plugin')
    ],
}