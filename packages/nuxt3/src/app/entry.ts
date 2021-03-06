import { createSSRApp, createApp, nextTick } from 'vue'
import { createNuxtApp, applyPlugins, normalizePlugins, CreateOptions } from '#app'
import '#build/css'
// @ts-ignore
import _plugins from '#build/plugins'
// @ts-ignore
import RootComponent from '#build/root-component.mjs'
// @ts-ignore
import AppComponent from '#build/app-component.mjs'

let entry: Function

const plugins = normalizePlugins(_plugins)

if (process.server) {
  entry = async function createNuxtAppServer (ssrContext: CreateOptions['ssrContext'] = {}) {
    const app = createApp(RootComponent)
    app.component('App', AppComponent)

    const nuxt = createNuxtApp({ app, ssrContext })

    await applyPlugins(nuxt, plugins)

    await nuxt.hooks.callHook('app:created', app)

    return app
  }
}

if (process.client) {
  // TODO: temporary webpack 5 HMR fix
  // https://github.com/webpack-contrib/webpack-hot-middleware/issues/390
  // @ts-ignore
  if (process.dev && import.meta.webpackHot) {
    // @ts-ignore
    import.meta.webpackHot.accept()
  }

  entry = async function initApp () {
    const isSSR = Boolean(window.__NUXT__?.serverRendered)
    const app = isSSR ? createSSRApp(RootComponent) : createApp(RootComponent)
    app.component('App', AppComponent)

    const nuxt = createNuxtApp({ app })

    await applyPlugins(nuxt, plugins)

    await nuxt.hooks.callHook('app:created', app)
    await nuxt.hooks.callHook('app:beforeMount', app)

    nuxt.hooks.hookOnce('page:finish', () => {
      nuxt.isHydrating = false
    })

    app.mount('#__nuxt')

    await nuxt.hooks.callHook('app:mounted', app)
    await nextTick()
  }

  entry().catch((error) => {
    console.error('Error while mounting app:', error) // eslint-disable-line no-console
  })
}

export default (ctx?: CreateOptions['ssrContext']) => entry(ctx)
