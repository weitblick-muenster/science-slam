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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
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
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/html-validator',
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
        'faTimes',
        'faTicketAlt',
      ],
      regular: [],
      brands: [
        'faTwitter',
        'faFacebook',
        'faInstagram',
      ],
    },
  },

  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      }

      const findEl = async (hash, x = undefined) => {
        if (document.querySelector(hash)) {
          return document.querySelector(hash);
        }

        return new Promise((resolve, _reject) => {
          if (x > 50) {
            resolve();
          } else {
            setTimeout(() => {
              const xValue = x ? x + 1 : 1;
              resolve(findEl(hash, xValue));
            }, 100);
          }
        });
      };

      if (to.hash) {
        const el = await findEl(to.hash);
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
        }
        return window.scrollTo(0, el.offsetTop);
      }

      return { x: 0, y: 0 };
    },
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
