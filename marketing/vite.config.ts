import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import { createHtmlPlugin } from 'vite-plugin-html';
import federation from "@originjs/vite-plugin-federation";


// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      mode: 'development',
      configplugins: [react(), tsconfigPaths()],

      server: {
        port: 3001,
        https: false,
        host: '127.0.0.1',
      },
      cacheDir: "node_modules/.cacheDir",
      plugins: [
        federation({
          name: 'marketing',
          filename: 'remoteEntry.js',
          exposes: {
            './MarketingApp': 'src/bootstrap',
          },
        }),
        createHtmlPlugin({
          minify: true,
          entry: 'src/index.ts',
          template: 'public/index.html',
        }),
      ],
    }
  }
})
