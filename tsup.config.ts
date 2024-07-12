import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: {
      index: 'src/index.ts'
    },
    format: ['cjs', 'esm'],
    target: 'node20',
    splitting: false,
    sourcemap: false,
    clean: true,
    minify: true,
    dts: true,
    outDir: 'dist'
  }
])
