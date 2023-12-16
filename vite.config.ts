import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
      ],
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      dts: 'types/components.d.ts',
    }),
  ],
})
