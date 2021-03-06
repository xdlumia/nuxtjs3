import { extname } from 'pathe'
import type { Plugin } from 'rollup'

export interface RawOptions {
  extensions?: string[]
}

export function raw (opts: RawOptions = {}): Plugin {
  const extensions = new Set(['.md', '.mdx', '.yml', '.txt', '.css', '.htm', '.html']
    .concat(opts.extensions || []))

  return {
    name: 'raw',
    transform (code, id) {
      if (id[0] !== '\0' && extensions.has(extname(id))) {
        return {
          code: `// ${id}\nexport default ${JSON.stringify(code)}`,
          map: null
        }
      }
    }
  }
}
