import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    'nuxt-graphql-client',
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.js',
    injectPosition: 0,
    viewer: false,
  },
  runtimeConfig: {
    craftApiUrl: process.env.CRAFT_API_URL,
    craftAuthToken: process.env.CRAFT_AUTH_TOKEN,
    // public: {
    //   GQL_HOST: 'http://mindsweep-2022.test/api', // overwritten by process.env.GQL_HOST
    //   livePreview: process.env.LIVE_PREVIEW === 'true',
    //   craftApiUrl: process.env.LIVE_PREVIEW === 'true' ? process.env.CRAFT_API_URL : '',
    //   craftAuthToken: process.env.LIVE_PREVIEW === 'true' ? process.env.CRAFT_AUTH_TOKEN : '',
    // }
    // runtimeConfig: {
        public: {
            GQL_HOST: 'http://localhost:8888/api', // graphQL endpoint
            BASE_URL: 'http://localhost:3000', // CMS
            BASE_CMS_URL: 'http://localhost:8888'
        },
    // },
  },
})