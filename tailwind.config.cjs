/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/preline/preline.js'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', // Default padding
        sm: '2rem', // Padding for small screens
        lg: '4rem', // Padding for large screens
        xl: '5rem' // Padding for extra-large screens
      }
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      backgroundImage: {
        gradient: 'linear-gradient(90deg, rgba(102, 36, 209, 1) 0%, rgba(121, 59, 221, 1) 100%)'
      },
      fontFamily: {
        neue: ['Mont Alt', 'sans-serif'],
        sans: ['"Open Sans"', 'sans-serif']
      },
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000229',
        dark: '#1a1a1a',
        primary: '#6624d1',
        'body-color': '#788293',
        'body-color-dark': '#eeeef5'
      },
      boxShadow: {
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      },
      dropShadow: {
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: [
    require('preline/plugin'),
    function ({ addBase, theme }) {
      addBase({
        'h1, h2, h3, h4, h5, h6': { fontFamily: theme('fontFamily.neue') },
        body: { fontFamily: theme('fontFamily.sans') }
      });
    }
  ]
};
