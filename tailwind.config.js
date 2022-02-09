const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: 'var(--white)',
      black: 'var(--black)',
      'primary-100': 'var(--primary-100)',
      'primary-200': 'var(--primary-200)',
      'primary-300': 'var(--primary-300)',
      'primary-400': 'var(--primary-400)',
      'primary-500': 'var(--primary-500)',
      'primary-600': 'var(--primary-600)',
      'primary-700': 'var(--primary-700)',
      'primary-800': 'var(--primary-800)',
      'primary-900': 'var(--primary-900)',
      'secondary-100': 'var(--secondary-100)',
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
