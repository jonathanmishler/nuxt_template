import { wrapFunctional } from './utils'

export { default as AppBar } from '../../components/AppBar.vue'
export { default as Drawer } from '../../components/Drawer.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Links } from '../../components/Links.vue'
export { default as List } from '../../components/List.vue'
export { default as ListGroup } from '../../components/ListGroup.vue'
export { default as ListItem } from '../../components/ListItem.vue'
export { default as MaterialAlert } from '../../components/MaterialAlert.vue'
export { default as MaterialCard } from '../../components/MaterialCard.vue'
export { default as MaterialChartCard } from '../../components/MaterialChartCard.vue'
export { default as MaterialSnackbar } from '../../components/MaterialSnackbar.vue'
export { default as MaterialStatsCard } from '../../components/MaterialStatsCard.vue'
export { default as Settings } from '../../components/Settings.vue'
export { default as ViewIntro } from '../../components/ViewIntro.vue'
export { default as AppBtn } from '../../components/app/Btn.vue'
export { default as AppCard } from '../../components/app/Card.vue'
export { default as AppTabs } from '../../components/app/Tabs.vue'
export { default as WidgetsAccount } from '../../components/widgets/Account.vue'
export { default as WidgetsAccountSettings } from '../../components/widgets/AccountSettings.vue'
export { default as WidgetsDrawerHeader } from '../../components/widgets/DrawerHeader.vue'
export { default as WidgetsDrawerToggle } from '../../components/widgets/DrawerToggle.vue'
export { default as WidgetsGoHome } from '../../components/widgets/GoHome.vue'
export { default as WidgetsNotifications } from '../../components/widgets/Notifications.vue'
export { default as WidgetsSearch } from '../../components/widgets/Search.vue'

export const LazyAppBar = import('../../components/AppBar.vue' /* webpackChunkName: "components/app-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyDrawer = import('../../components/Drawer.vue' /* webpackChunkName: "components/drawer" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyLinks = import('../../components/Links.vue' /* webpackChunkName: "components/links" */).then(c => wrapFunctional(c.default || c))
export const LazyList = import('../../components/List.vue' /* webpackChunkName: "components/list" */).then(c => wrapFunctional(c.default || c))
export const LazyListGroup = import('../../components/ListGroup.vue' /* webpackChunkName: "components/list-group" */).then(c => wrapFunctional(c.default || c))
export const LazyListItem = import('../../components/ListItem.vue' /* webpackChunkName: "components/list-item" */).then(c => wrapFunctional(c.default || c))
export const LazyMaterialAlert = import('../../components/MaterialAlert.vue' /* webpackChunkName: "components/material-alert" */).then(c => wrapFunctional(c.default || c))
export const LazyMaterialCard = import('../../components/MaterialCard.vue' /* webpackChunkName: "components/material-card" */).then(c => wrapFunctional(c.default || c))
export const LazyMaterialChartCard = import('../../components/MaterialChartCard.vue' /* webpackChunkName: "components/material-chart-card" */).then(c => wrapFunctional(c.default || c))
export const LazyMaterialSnackbar = import('../../components/MaterialSnackbar.vue' /* webpackChunkName: "components/material-snackbar" */).then(c => wrapFunctional(c.default || c))
export const LazyMaterialStatsCard = import('../../components/MaterialStatsCard.vue' /* webpackChunkName: "components/material-stats-card" */).then(c => wrapFunctional(c.default || c))
export const LazySettings = import('../../components/Settings.vue' /* webpackChunkName: "components/settings" */).then(c => wrapFunctional(c.default || c))
export const LazyViewIntro = import('../../components/ViewIntro.vue' /* webpackChunkName: "components/view-intro" */).then(c => wrapFunctional(c.default || c))
export const LazyAppBtn = import('../../components/app/Btn.vue' /* webpackChunkName: "components/app-btn" */).then(c => wrapFunctional(c.default || c))
export const LazyAppCard = import('../../components/app/Card.vue' /* webpackChunkName: "components/app-card" */).then(c => wrapFunctional(c.default || c))
export const LazyAppTabs = import('../../components/app/Tabs.vue' /* webpackChunkName: "components/app-tabs" */).then(c => wrapFunctional(c.default || c))
export const LazyWidgetsAccount = import('../../components/widgets/Account.vue' /* webpackChunkName: "components/widgets-account" */).then(c => wrapFunctional(c.default || c))
export const LazyWidgetsAccountSettings = import('../../components/widgets/AccountSettings.vue' /* webpackChunkName: "components/widgets-account-settings" */).then(c => wrapFunctional(c.default || c))
export const LazyWidgetsDrawerHeader = import('../../components/widgets/DrawerHeader.vue' /* webpackChunkName: "components/widgets-drawer-header" */).then(c => wrapFunctional(c.default || c))
export const LazyWidgetsDrawerToggle = import('../../components/widgets/DrawerToggle.vue' /* webpackChunkName: "components/widgets-drawer-toggle" */).then(c => wrapFunctional(c.default || c))
export const LazyWidgetsGoHome = import('../../components/widgets/GoHome.vue' /* webpackChunkName: "components/widgets-go-home" */).then(c => wrapFunctional(c.default || c))
export const LazyWidgetsNotifications = import('../../components/widgets/Notifications.vue' /* webpackChunkName: "components/widgets-notifications" */).then(c => wrapFunctional(c.default || c))
export const LazyWidgetsSearch = import('../../components/widgets/Search.vue' /* webpackChunkName: "components/widgets-search" */).then(c => wrapFunctional(c.default || c))
