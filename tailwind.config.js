/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      beyulian: 'Beyulian, cursive',
    },
    colors: {
      brown: '#7c6f62',
      goldie: '#91834e',
      silver: '#BBC2CC',
      semiblack: '#302e2e',
      pinky: '#a89898',
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
  },
  plugins: [require('flowbite/plugin')],
};
