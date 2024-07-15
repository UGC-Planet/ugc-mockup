import {
  defineNuxtConfig
} from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{
          name: 'description',
          content: 'Platform for Creators'
        },
      ],
      link: [{
          rel: 'icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          href: '/icons/apple-touch-icon-180x180.png'
        },
      ],
      script: [/*{
        src: 'https://platform-api.sharethis.com/js/sharethis.js#property=63155c574a688f00124a59c2&product=sticky-share-buttons',
        async: 'async',
        crossorigin: 'anonymous'
      }, 
      {
        src: 'https://js.stripe.com/v3/',
        defer: true,
        crossorigin: 'anonymous'
      }*/
        {
          src: 'assets/bootstrap/js/bootstrap.bundle.min.js',
        },
        {
          src: 'assets/smoothscroll/smooth-scroll.js',
        },
        {
          src: 'assets/ytplayer/index.js',
        },
        {
          src: 'assets/dropdown/js/navbar-dropdown.js',
        },
        {
          src: 'assets/theme/js/script.js',
        }
    ],
    },
  },

  appConfig: {
    titleSuffix: 'UGC Planet',
  },

  css: [
    'assets/web/assets/mobirise-icons2/mobirise2.css',
    'assets/bootstrap/css/bootstrap.min.css',
    'assets/tether/tether.min.css',
    'assets/bootstrap/css/bootstrap-grid.min.css',
    'assets/bootstrap/css/bootstrap-reboot.min.css',
    'assets/theme/css/style.css',
    'assets/mobirise/css/mbr-additional.css',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'assets/commerce/css/ui.css',
    'assets/styles/styles.css',
  ],

  modules: [
    '@nuxt/content',
    '@nuxtjs/apollo',
  ],

  /*apollo: {
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    clients: {
      default: {
        tokenName: "apollo-token",
        httpEndpoint: process.env.STORYBLOK_URL,
        httpLinkOptions: {
          headers: {
            //'Authorization': process.env.STORYBLOK_TOKEN,
            token: process.env.STORYBLOK_TOKEN,
            version: 'publish'
          }
        } 
      },
    },
  },*/

  build: {
    transpile: [
      'vuetify',
      '@apollo/client',
      'ts-invariant/process',
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/pro-solid-svg-icons",
      "@fortawesome/pro-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})