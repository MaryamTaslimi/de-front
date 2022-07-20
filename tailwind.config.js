module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'accent': '#FFCC29',
            'accent-50': '#FEE594',
            'primary': '#284786',
            'secondary': '#2AA9A6',
            'secondary-50': '#52C7C4',
            'shades-60': 'rgba(159,159,159,0.38)',
            'shades-40': '#C1C1C1',
            'shades-20': '#F5F5F5',
            'shades-10': '#FDFDFD',
            'white': '#FFFFFF',
            'form-grey': '#AFAFAF',
            'shades-100': '#060606',
            'shades-80': '#616161',
            'banner-primary': '#E7481E'

        },
        extend: {},
    },
    plugins: [
        require('tailwindcss-rtl'),
        require('@tailwindcss/forms'),
        require('flowbite/plugin')
    ],
}