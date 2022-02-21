const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      lg: '1280px',
    },
    colors: {
      white: 'var(--white)',
      black: 'var(--black)',
      transparent: 'transparent',
      'primary-300': 'var(--primary-300)',
      'primary-400': 'var(--primary-400)',
      'primary-500': 'var(--primary-500)',
      'secondary-100': 'var(--secondary-100)',
      'secondary-150': 'var(--secondary-150)',
      'secondary-200': 'var(--secondary-200)',
      'secondary-300': 'var(--secondary-300)',
      'secondary-400': 'var(--secondary-400)',
      'secondary-500': 'var(--secondary-500)',
      'secondary-600': 'var(--secondary-600)',
      'secondary-700': 'var(--secondary-700)',
      'secondary-800': 'var(--secondary-800)',
      'secondary-900': 'var(--secondary-900)',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
