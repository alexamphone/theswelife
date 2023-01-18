/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/public/images/hero.png')",
      },
      spacing: {
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        12: '3rem',
        16: '4rem',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.9rem', { lineHeight: '1rem' }],
        base: ['1rem', { lineHeight: '1.6rem' }],
        lg: ['1.25rem', { lineHeight: '1.8rem' }],
        xl: ['1.5rem', { lineHeight: '2rem' }],
        '2xl': ['2rem', { lineHeight: '2rem' }],
      },
    },
  },
  plugins: [],
};
