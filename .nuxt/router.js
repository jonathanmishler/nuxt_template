import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1b8b3226 = () => interopDefault(import('../pages/error.vue' /* webpackChunkName: "pages/error" */))
const _b4d9bd7c = () => interopDefault(import('../pages/googleMaps.vue' /* webpackChunkName: "pages/googleMaps" */))
const _2d83fa18 = () => interopDefault(import('../pages/Icons.vue' /* webpackChunkName: "pages/Icons" */))
const _66dcc1f4 = () => interopDefault(import('../pages/notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _6aad6abf = () => interopDefault(import('../pages/regularTables.vue' /* webpackChunkName: "pages/regularTables" */))
const _09990a81 = () => interopDefault(import('../pages/typography.vue' /* webpackChunkName: "pages/typography" */))
const _44af1808 = () => interopDefault(import('../pages/userProfile.vue' /* webpackChunkName: "pages/userProfile" */))
const _5075d820 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1b8b3226,
    name: "error"
  }, {
    path: "/googleMaps",
    component: _b4d9bd7c,
    name: "googleMaps"
  }, {
    path: "/Icons",
    component: _2d83fa18,
    name: "Icons"
  }, {
    path: "/notifications",
    component: _66dcc1f4,
    name: "notifications"
  }, {
    path: "/regularTables",
    component: _6aad6abf,
    name: "regularTables"
  }, {
    path: "/typography",
    component: _09990a81,
    name: "typography"
  }, {
    path: "/userProfile",
    component: _44af1808,
    name: "userProfile"
  }, {
    path: "/",
    component: _5075d820,
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
