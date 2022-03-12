import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import { EsLinter, linterPlugin } from 'vite-plugin-linter'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig(configEnv => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./{lib,src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['lib/main.tsx'],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace('/lib', ''),
        content,
      }),
    }),
  ],
  build: {
    lib: {
      entry: resolve('lib', 'main.tsx'),
      name: 'ReactFeatureFlag',
      fileName: (format) => `my-lib-hello.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
    },
  },
}))
