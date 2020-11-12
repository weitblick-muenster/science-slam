/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '4.25xl': '2.5rem',
      '4.5xl': '2.75rem',
      '4.75xl': '2.875rem',
      '5xl': '3rem',
      '6xl': '5rem',
      '7xl': '5rem',
    },
    extend: {
      screens: {
        xsm: '360px',
      },
      colors: {
        primary: 'rgb(253, 235, 52)',
        'primary-dark': '#DDCB14',
        secondary: 'rgb(1, 32, 56)',
        'secondary-dark': '#030F27',
        weitblick: '#FF9900',
        'weitblick-dark': '#EB8010',
        bluegray: '#D9E2ED',

        twitter: 'rgb(29, 161, 242)',
        facebook: '#4267B2',
        instagram: '#833AB4',
        paypal: '#0079C1',
        'paypal-dark': '#00457C',
      },
      boxShadow: {
        primary: '0 4px 0 rgb(253, 235, 52)',
        secondary: '0 4px 0 rgb(1, 32, 56)',
        'secondary-thin': '0 2px 0 rgb(1, 32, 56)',
      },
      width: {
        'fit-content': 'fit-content',
      },
      padding: {
        40: '10rem',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-hyphens'),
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
};
