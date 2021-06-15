import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AppBar: () => import('../../components/AppBar.vue' /* webpackChunkName: "components/app-bar" */).then(c => wrapFunctional(c.default || c)),
  Drawer: () => import('../../components/Drawer.vue' /* webpackChunkName: "components/drawer" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Links: () => import('../../components/Links.vue' /* webpackChunkName: "components/links" */).then(c => wrapFunctional(c.default || c)),
  List: () => import('../../components/List.vue' /* webpackChunkName: "components/list" */).then(c => wrapFunctional(c.default || c)),
  ListGroup: () => import('../../components/ListGroup.vue' /* webpackChunkName: "components/list-group" */).then(c => wrapFunctional(c.default || c)),
  ListItem: () => import('../../components/ListItem.vue' /* webpackChunkName: "components/list-item" */).then(c => wrapFunctional(c.default || c)),
  MaterialAlert: () => import('../../components/MaterialAlert.vue' /* webpackChunkName: "components/material-alert" */).then(c => wrapFunctional(c.default || c)),
  MaterialCard: () => import('../../components/MaterialCard.vue' /* webpackChunkName: "components/material-card" */).then(c => wrapFunctional(c.default || c)),
  MaterialChartCard: () => import('../../components/MaterialChartCard.vue' /* webpackChunkName: "components/material-chart-card" */).then(c => wrapFunctional(c.default || c)),
  MaterialSnackbar: () => import('../../components/MaterialSnackbar.vue' /* webpackChunkName: "components/material-snackbar" */).then(c => wrapFunctional(c.default || c)),
  MaterialStatsCard: () => import('../../components/MaterialStatsCard.vue' /* webpackChunkName: "components/material-stats-card" */).then(c => wrapFunctional(c.default || c)),
  Settings: () => import('../../components/Settings.vue' /* webpackChunkName: "components/settings" */).then(c => wrapFunctional(c.default || c)),
  ViewIntro: () => import('../../components/ViewIntro.vue' /* webpackChunkName: "components/view-intro" */).then(c => wrapFunctional(c.default || c)),
  AppBtn: () => import('../../components/app/Btn.vue' /* webpackChunkName: "components/app-btn" */).then(c => wrapFunctional(c.default || c)),
  AppCard: () => import('../../components/app/Card.vue' /* webpackChunkName: "components/app-card" */).then(c => wrapFunctional(c.default || c)),
  AppTabs: () => import('../../components/app/Tabs.vue' /* webpackChunkName: "components/app-tabs" */).then(c => wrapFunctional(c.default || c)),
  WidgetsAccount: () => import('../../components/widgets/Account.vue' /* webpackChunkName: "components/widgets-account" */).then(c => wrapFunctional(c.default || c)),
  WidgetsAccountSettings: () => import('../../components/widgets/AccountSettings.vue' /* webpackChunkName: "components/widgets-account-settings" */).then(c => wrapFunctional(c.default || c)),
  WidgetsDrawerHeader: () => import('../../components/widgets/DrawerHeader.vue' /* webpackChunkName: "components/widgets-drawer-header" */).then(c => wrapFunctional(c.default || c)),
  WidgetsDrawerToggle: () => import('../../components/widgets/DrawerToggle.vue' /* webpackChunkName: "components/widgets-drawer-toggle" */).then(c => wrapFunctional(c.default || c)),
  WidgetsGoHome: () => import('../../components/widgets/GoHome.vue' /* webpackChunkName: "components/widgets-go-home" */).then(c => wrapFunctional(c.default || c)),
  WidgetsNotifications: () => import('../../components/widgets/Notifications.vue' /* webpackChunkName: "components/widgets-notifications" */).then(c => wrapFunctional(c.default || c)),
  WidgetsSearch: () => import('../../components/widgets/Search.vue' /* webpackChunkName: "components/widgets-search" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
