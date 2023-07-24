// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    plugins: ['@/plugins/i18n.ts',
    ],
    modules: ['@nuxtjs/tailwindcss', '@kevinmarrec/nuxt-pwa'],
    pwa: {
        manifest: {
            name: 'resume',
            short_name: 'resume',
            description: "resumepooriavakili"
        },

        icon: {
            source: './public/profilepooria.png',
            fileName: 'profilepooria.png',
            sizes: [64, 128, 256, 384, 512]
        },
        workbox: {

        }
    },
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=600,initial-scale=1',
            title: 'resume',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'resume', content: 'My resume site.' }
            ],
        }
    },
    nitro: {
        prerender: {
            crawlLinks: true
        }
    },
    css: ['@/assets/iransans.css', '@/assets/tailwind.css']
})
