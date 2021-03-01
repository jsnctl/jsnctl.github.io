const { description } = require('../../package')

module.exports = {
  title: 'jsnctl.github.io',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    search: false,
    nav: [
      {
        text: 'News',
        link: '/',
      },
      {
        text: 'About',
        link: '/about',
      },
      {
        text: 'Hypervector',
        link: 'https://hypervector.io'
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}
