import {
  defineNuxtConfig
} from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [{
        src: process.env.NUXT_PUBLIC_UMAMI_HOST,
        async: true,
        'data-website-id': process.env.NUXT_PUBLIC_UMAMI_ID
      }],
    },
  },

  extends: ['@sidebase/core'],

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
    //'nuxt-graphql-client',
    '@nuxt/content',
    'nuxt-meilisearch',
    'nuxt-directus',
    '@nuxtjs/apollo',
    ["@storyblok/nuxt", { accessToken: process.env.accessToken }]
  ],

  directus: {
    url: process.env.DIRECTUS_URL,
    auth: {
      email: process.env.DIRECTUS_EMAIL,
      password: process.env.DIRECTUS_PASSWORD,
      token: process.env.DIRECTUS_TOKEN,
    }
  },

  meilisearch: {
    hostUrl: process.env.HOSTURL,
    searchApiKey: process.env.SEARCH_APIKEY,
    adminApiKey: process.env.ADMIN_APIKEY,
    serverSideUsage: true,
    instantSearch: {
      theme: 'algolia'
    }
  },

  apollo: {
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
        }/* */
      },
    },
  },

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