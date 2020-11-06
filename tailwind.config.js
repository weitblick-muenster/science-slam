module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'rgb(253, 235, 52)',
        'primary-dark': '#F8E206',
        secondary: 'rgb(1, 32, 56)',
        'secondary-dark': '#030F27',
        weitblick: '#FF9900',
        'weitblick-dark': '#EB8010',
        bluegray: '#D9E2ED',

        twitter: 'rgb(29, 161, 242)',
        facebook: '#4267B2',
        instagram: '#833AB4',
      },
      boxShadow: {
        primary: '0 4px 0 rgb(253, 235, 52)',
      },
      width: {
        'fit-content': 'fit-content',
      },
    },
  },
  variants: {},
  plugins: [],
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
