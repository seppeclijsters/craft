import { defineNuxtConfig } from 'nuxt'
import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    components: {
        global: true,
        dirs: [
            '~/components/atoms',
            '~/components/molecules',
            '~/components/organisms',
            '~/components/templates',
        ],
    },
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    },
    css: ['@/assets/css/styles.pcss'],
    modules: ['nuxt-graphql-client'],
    // runtimeConfig: {
    //     public: {
    //         GQL_HOST: 'http://headless.test/api',
    //         BASE_URL: 'http://localhost:3000',
    //         BASE_CMS_URL: 'http://headless.test'
    //     },
    // },
    runtimeConfig: {
        public: {
            GQL_HOST: 'http://localhost:8888/api', // graphQL endpoint
            BASE_URL: 'http://localhost:3000', // CMS
            BASE_CMS_URL: 'http://localhost:8888'
        },
    },
    vite: {
        plugins: [svgLoader()],
    },
})