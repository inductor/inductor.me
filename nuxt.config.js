const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Top',
    titleTemplate: '%s - inductor.me',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'inductor.me'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: '完全に理解している人のサイト'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/img/inductor_logo.png'
      },
      {
        hid: 'og:image:width',
        name: 'og:image:width',
        content: '1200'
      },
      {
        hid: 'og:image:height',
        name: 'og:image:height',
        content: '630'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: '/'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'inductor.me'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@_inductor_'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@_inductor_'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/img/inductor_logo.png'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
        sizes: '16x16'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['ie-buster'],
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
