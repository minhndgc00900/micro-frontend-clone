import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      mode: 'development',
      configplugins: [react(), tsconfigPaths()],

      server: {
        port: 3001,
      },
      plugins: [
        // ...other plugins
        createHtmlPlugin({
          minify: true,
          entry: 'src/index.ts',
          template: 'public/index.html',
        }),
      ],
    }
  }
})
