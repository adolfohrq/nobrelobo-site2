import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  publicDir: 'public',
  server: {
    port: 3009,
    open: true,
    host: true,
    strictPort: true,
    hmr: {
      host: 'localhost',
    },
    fs: {
      strict: true,
    },
    cors: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1'
    ],
  },
  define: {
    'process.env': {},
    'process.browser': true,
    'process.version': JSON.stringify(process.version),
  },
}) 