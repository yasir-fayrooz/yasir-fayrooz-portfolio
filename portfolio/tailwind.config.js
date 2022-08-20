/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './modals/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xxxs: { max: '437px' },
      xxs: { min: '437px' },
      xs: { min: '547px' },
      // => @media (min-width: 640px) { ... }
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
