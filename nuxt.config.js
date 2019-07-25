const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '旗舰店',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css:[
    'element-ui/lib/theme-chalk/index.css',
    'static/css/reset.css',
    'static/css/common.css',
    "swiper/dist/css/swiper.css",
    "plugins/font/iconfont.css"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src:'~/plugins/element-ui',
      ssr:true
    },
    { src: "~/plugins/swiper.js", ssr: false },
    { src: "~/plugins/vue-qriously.js", ssr: false },
    { src: "~/plugins/filter.js", ssr: true },
    // { src: "~/plugins/mock.js", ssr: true }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  router:{
    middleware: 'loc'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    },
    babel:{
      'plugins':[
        [
          'component',
          {
            'libraryName':'element-ui',
            'styleLibraryName':"theme-chalk"
          }
        ]
      ]
    }
  }
}
