import { existsSync, promises as fsp } from 'fs'
import { join } from 'pathe'
import consola from 'consola'
import { extendPreset } from '../utils'
import { NitroContext, NitroPreset } from '../context'
import { lambda } from './lambda'

export const netlify: NitroPreset = extendPreset(lambda, {
  output: {
    dir: '{{ _nuxt.rootDir }}/.netlify/functions-internal',
    publicDir: '{{ _nuxt.rootDir }}/dist'
  },
  hooks: {
    async 'nitro:compiled' (ctx: NitroContext) {
      const redirectsPath = join(ctx.output.publicDir, '_redirects')
      let contents = '/* /.netlify/functions/server 200'
      if (existsSync(redirectsPath)) {
        const currentRedirects = await fsp.readFile(redirectsPath, 'utf-8')
        if (currentRedirects.match(/^\/\* /m)) {
          consola.info('Not adding Nitro fallback to `_redirects` (as an existing fallback was found).')
          return
        }
        consola.info('Adding Nitro fallback to `_redirects` to handle all unmatched routes.')
        contents = currentRedirects + '\n' + contents
      }
      await fsp.writeFile(redirectsPath, contents)
    },
    'nitro:rollup:before' (ctx: NitroContext) {
      ctx.rollupConfig.output.entryFileNames = 'server.ts'
    }
  },
  ignore: [
    'netlify.toml',
    '_redirects'
  ]
})

// eslint-disable-next-line
export const netlify_builder: NitroPreset = extendPreset(netlify, {
  entry: '{{ _internal.runtimeDir }}/entries/netlify_builder'
})
