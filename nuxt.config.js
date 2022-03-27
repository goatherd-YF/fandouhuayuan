module.exports = {
  // before: require('./mock/mock-server.js')
  proxy: {
    '/dev-api': {
      target: 'http://localhost:8160',
      // pathRewrite 表示代理路径是否是 URL 的一部分
      // 默认不写 pathRewrite，/api 就是 URL 的一部分，开发环境和生产环境都不能去掉
      pathRewrite: {'^/dev-api' : ''} // api 只在开发环境下有，不是 URL 的一部分
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '翻斗花园跳蚤市场-服务于校园学生用户',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '二手商品交易，限制物品转售，信息通知维护' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /**
   * plugins
   */
  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false }
  ],
  css: [
    'swiper/dist/css/swiper.css'
  ]
}

