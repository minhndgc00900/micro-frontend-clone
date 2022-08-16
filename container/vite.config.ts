import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import { createHtmlPlugin } from 'vite-plugin-html';
import federation from "@originjs/vite-plugin-federation";


// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    federation({
      name: 'container',
      remotes: {
        marketing: 'http://127.0.0.1:3001/remoteEntry.js'
      }
    }),
    createHtmlPlugin({
      minify: true,
      entry: 'src/index.ts',
      template: 'public/index.html',
    }),
  ],
})
