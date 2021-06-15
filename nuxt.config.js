export default {
  components: true,
  modules: [
    'nuxt-webfontloader',
  ],
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/eslint-module',
  ],
  plugins: [
    '~/plugins/chartist.js'
  ],
  vuetify: {
    optionsPath: '~plugins/vuetify.options.js',
    customVariables: ['~/assets/variables.scss'],
    treeShake: true
  },
  webfontloader: {
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap'],
    }
  }
}