/** @type {import('tailwindcss').Config} */

const toRem = px => `${px / 16}rem`

module.exports = {
    mode: 'jit',
    content: [
        './assets/**/*.pcss',
        './components/!*.{vue,js}',
        './components/!**!/!*.{vue,js}',
        './pages/!*.vue',
        './pages/!**!/!*.vue',
        './plugins/!**/!*.{js,ts}',
        './!*.{vue,js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#f2396a',
                dark: '#0D0D0D',
                grey: {
                    normal: '#2C2C2C',
                },
            },
            fontFamily: {
                sans: "'Lato', sans-serif;",
            },
            fontSize: {
                14: toRem(14),
            },
            transitionDuration: {
                250: '250ms',
            },
            gridColumn: {
                'span-full': 'full',
                'span-main': 'main',
                'span-14': 'span 14 / span 14',
                'span-15': 'span 15 / span 15',
            },
            gridTemplateColumns: {
                mobile: '[full-start] minmax(1.5rem, 1fr) [main-start] repeat(12, [main-col] minmax(0, 7.5rem)) [main-col main-end] minmax(1.5rem, 1fr) [full-end]',
                desktop: '[full-start] minmax(3rem, 1fr) [main-start] repeat(12, [main-col] minmax(0, 7.5rem)) [main-col main-end] minmax(3rem, 1fr) [full-end]',
                'row-in-row': '[full-start main-start] repeat(12, [main-col] minmax(0, 7.5rem)) [main-col main-end full-end]',
            },
            gridColumnStart: {
                full: 'full-start',
                main: 'main-start',
                14: '14',
                15: '15',
                'main-1': 'main-col 1',
                'main-2': 'main-col 2',
                'main-3': 'main-col 3',
                'main-4': 'main-col 4',
                'main-5': 'main-col 5',
                'main-6': 'main-col 6',
                'main-7': 'main-col 7',
                'main-8': 'main-col 8',
                'main-9': 'main-col 9',
                'main-10': 'main-col 10',
                'main-11': 'main-col 11',
                'main-12': 'main-col 12',
                'main-13': 'main-col 13',
            },
            gridColumnEnd: {
                full: 'full-end',
                main: 'main-end',
                14: '14',
                15: '15',
                'main-1': 'main-col 1',
                'main-2': 'main-col 2',
                'main-3': 'main-col 3',
                'main-4': 'main-col 4',
                'main-5': 'main-col 5',
                'main-6': 'main-col 6',
                'main-7': 'main-col 7',
                'main-8': 'main-col 8',
                'main-9': 'main-col 9',
                'main-10': 'main-col 10',
                'main-11': 'main-col 11',
                'main-12': 'main-col 12',
                'main-13': 'main-col 13',
            },
            aspectRatio: {
                '4/5': '4 / 5',
                '9/4': '9 / 4',
            },
            screens: {
                smd: { max: toRem(576) },
                sm: toRem(576),
                mdd: { max: toRem(767) },
                md: toRem(768),
                nm: toRem(1024),
                lg: toRem(1440),
                xl: toRem(1920),
            },
        },
    },
    plugins: [],
}
