import { addVitePlugin, addWebpackPlugin, defineNuxtModule, addTemplate, resolveAlias, addPluginTemplate } from '@nuxt/kit'
import { isAbsolute, relative, resolve } from 'pathe'
import type { Identifiers, AutoImportsOptions } from './types'
import { TransformPlugin } from './transform'
import { defaultIdentifiers } from './identifiers'

export default defineNuxtModule<AutoImportsOptions>({
  name: 'auto-imports',
  configKey: 'autoImports',
  defaults: { identifiers: defaultIdentifiers },
  setup ({ disabled = [], identifiers }, nuxt) {
    for (const key of disabled) {
      delete identifiers[key]
    }

    // temporary disable #746
    // eslint-disable-next-line no-constant-condition
    if (nuxt.options.dev && false) {
      // Add all imports to globalThis in development mode
      addPluginTemplate({
        filename: 'auto-imports.mjs',
        src: '',
        getContents: () => {
          const imports = toImports(Object.entries(identifiers))
          const globalThisSet = Object.keys(identifiers).map(name => `globalThis.${name} = ${name};`).join('\n')
          return `${imports}\n\n${globalThisSet}\n\nexport default () => {};`
        }
      })
    } else {
      // Transform to inject imports in production mode
      addVitePlugin(TransformPlugin.vite(identifiers))
      addWebpackPlugin(TransformPlugin.webpack(identifiers))
    }

    // Add types
    const resolved = {}
    const r = (id: string) => {
      if (resolved[id]) { return resolved[id] }
      let path = resolveAlias(id, nuxt.options.alias)
      if (isAbsolute(path)) {
        path = relative(nuxt.options.buildDir, path)
      }
      // Remove file extension for benefit of TypeScript
      path = path.replace(/\.[a-z]+$/, '')
      resolved[id] = path
      return path
    }

    addTemplate({
      filename: 'auto-imports.d.ts',
      write: true,
      getContents: () => `// Generated by auto imports
declare global {
${Object.entries(identifiers).map(([api, moduleName]) => `  const ${api}: typeof import('${r(moduleName)}')['${api}']`).join('\n')}
}\nexport {}`
    })
    nuxt.hook('prepare:types', ({ references }) => {
      references.push({ path: resolve(nuxt.options.buildDir, 'auto-imports.d.ts') })
    })
  }
})

function toImports (identifiers: Identifiers) {
  const map: Record<string, Set<string>> = {}

  identifiers.forEach(([name, moduleName]) => {
    if (!map[moduleName]) {
      map[moduleName] = new Set()
    }
    map[moduleName].add(name)
  })

  return Object.entries(map)
    .map(([name, imports]) => `import { ${Array.from(imports).join(', ')} } from '${name}';`)
    .join('\n')
}
