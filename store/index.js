// Data
export const state = () => ({
    drawer: null,
    drawerImage: true,
    mini: false,
    items: [
      {
        title: 'Dashboard',
        icon: 'mdi-view-dashboard',
        to: '/',
      },
      {
        title: 'User Profile',
        icon: 'mdi-account',
        to: '/userProfile',
      },
      {
        title: 'Regular Tables',
        icon: 'mdi-clipboard-outline',
        to: '/regularTables',
      },
      {
        title: 'Typography',
        icon: 'mdi-format-font',
        to: '/typography',
      },
      {
        title: 'Icons',
        icon: 'mdi-chart-bubble',
        to: '/icons',
      },
      {
        title: 'Google Maps',
        icon: 'mdi-map-marker',
        to: '/googleMaps',
      },
      {
        title: 'Notifications',
        icon: 'mdi-bell',
        to: '/notifications',
      },
    ],
  })
  