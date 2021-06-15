export default {
  customVariables: ['~/assets/variables.scss'],
  treeShake: true,
  breakpoint: { mobileBreakpoint: 960 },
  icons: {
    values: { expand: 'mdi-menu-down' },
  },
  theme: {
    options: {customProperties: true},
    themes: {
      light: {
        primary: '#E91E63',
        secondary: '#9C27b0',
        accent: '#e91e63',
        info: '#00CAE3',
        success: '#4CAF50',
        warning: '#FB8C00',
        error: '#FF5252',
      },      
    },
  },
}
