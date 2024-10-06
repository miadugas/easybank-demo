/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'body-bg': '#fafafa',
      },
      fontFamily: {
        sans: ['"Public Sans"', 'sans-serif'],
      },
      spacing: {
        '18': '72px',
      },
      fontSize: {
        '14px': '14px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
