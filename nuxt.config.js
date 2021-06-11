export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'de',
    },
    title: 'Science Slam',
    meta: [
      { charset: 'utf-8' },
      { name: 'title', content: 'Weitblick Science Slam Münster' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // eslint-disable-next-line max-len
      { hid: 'description', name: 'description', content: 'Weitblick Münster veranstaltet jedes Semester einen Science Slam – dieses Mal auch im Live Stream. Sei dabei!' },

      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'de_DE' },
      { property: 'og:url', content: 'https://slam.weitblicker.live' },
      { property: 'og:title', content: 'Weitblick Science Slam Münster' },
      // eslint-disable-next-line max-len
      { property: 'og:description', content: 'Weitblick Münster veranstaltet jedes Semester einen Science Slam – dieses Mal auch im Live Stream. Sei dabei!' },
      { property: 'og:image', content: 'https://slam.weitblicker.live/logo.jpg' },
      { property: 'og:site_name', content: 'Science Slam' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  loading: {
    color: 'rgb(253, 235, 52)',
    height: '5px',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/stylesheets/app.scss',
    'spinkit/spinkit.min.css',
    'swiper/css/swiper.min.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/vue-countdown', mode: 'client' },
    { src: '@/plugins/vue-smooth-scroll', mode: 'client' },
    { src: '@/plugins/swiper', mode: 'client' },
    { src: '@/plugins/directives/numeric-only', mode: 'client' },
    { src: '@/plugins/notification-plugin', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/html-validator',
    '@aceforth/nuxt-optimized-images',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  fontawesome: {
    icons: {
      solid: [
        'faArrowAltCircleDown',
        'faBars',
        'faExclamationTriangle',
        'faGlobe',
        'faHandHoldingUsd',
        'faMinus',
        'faPlus',
        'faTicketAlt',
        'faTimes',
        'faTimesCircle',
      ],
      regular: [
        'faCheckCircle',
        'faQuestionCircle',
        'faTimesCircle',
      ],
      brands: [
        'faFacebook',
        'faInstagram',
        'faPaypal',
        'faTwitter',
      ],
    },
  },

  optimizedImages: {
    optimizeImages: true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    routes: [
      '/',
      '/datenschutz',
      '/impressum',
    ],
  },
};
