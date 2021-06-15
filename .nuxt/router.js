import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _576ebe2e = () => interopDefault(import('../pages/error.vue' /* webpackChunkName: "pages/error" */))
const _53adda3a = () => interopDefault(import('../pages/googleMaps.vue' /* webpackChunkName: "pages/googleMaps" */))
const _69678620 = () => interopDefault(import('../pages/Icons.vue' /* webpackChunkName: "pages/Icons" */))
const _f766b9e4 = () => interopDefault(import('../pages/notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _22686ec7 = () => interopDefault(import('../pages/regularTables.vue' /* webpackChunkName: "pages/regularTables" */))
const _9098790e = () => interopDefault(import('../pages/typography.vue' /* webpackChunkName: "pages/typography" */))
const _1a364bf8 = () => interopDefault(import('../pages/userProfile.vue' /* webpackChunkName: "pages/userProfile" */))
const _13a89ff8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/error",
    component: _576ebe2e,
    name: "error"
  }, {
    path: "/googleMaps",
    component: _53adda3a,
    name: "googleMaps"
  }, {
    path: "/Icons",
    component: _69678620,
    name: "Icons"
  }, {
    path: "/notifications",
    component: _f766b9e4,
    name: "notifications"
  }, {
    path: "/regularTables",
    component: _22686ec7,
    name: "regularTables"
  }, {
    path: "/typography",
    component: _9098790e,
    name: "typography"
  }, {
    path: "/userProfile",
    component: _1a364bf8,
    name: "userProfile"
  }, {
    path: "/",
    component: _13a89ff8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
