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
    css: ['@/assets/css/styles.pcss', '@/assets/style.css'],
    modules: ['nuxt-graphql-client'],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    runtimeConfig: {
        public: {
            GQL_HOST: 'https://craft-cms.appeel.dev/backend/web/api', // URL to API
            BASE_URL: 'https://craft-cms.appeel.dev/',
            BASE_CMS_URL: 'https://craft-cms.appeel.dev/backend/web' // CMS URL
        },
    },
    // runtimeConfig: {
    //     public: {
    //         GQL_HOST: 'http://localhost:8888/api', // graphQL endpoint
    //         BASE_URL: 'http://localhost:3000', // CMS
    //         BASE_CMS_URL: 'http://localhost:8888'
    //     },
    // },
    vite: {
        plugins: [svgLoader()],
    },
})