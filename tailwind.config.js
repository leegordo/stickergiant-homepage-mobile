/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#bb3526',
        },
        text: {
          default: '#383839',
          secondary: '#8a8c8e',
          tertiary: '#9d9fa1',
        },
        neutral: {
          default: '#4d4d4f',
        },
        background: {
          default: '#ffffff',
          neutral: '#f3f3f3',
        },
        border: {
          default: '#bdbec0',
          neutral: '#303030',
          tertiary: '#b2b2b2',
        }
      },
      spacing: {
        '0': '0',
        '150': '6px',
        '200': '8px',
        '300': '12px',
        '400': '16px',
        '600': '24px',
        '800': '32px',
        '1200': '48px',
        '1600': '64px',
        '4000': '160px',
      },
      borderRadius: {
        'full': '9999px',
        '200': '8px',
      },
    },
  },
  plugins: [],
}