import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'docs')

// https://vitejs.dev/config/
export default defineConfig({
  base: 'hometest',
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        source: resolve(root, 'source', 'index.html'),
        doc: resolve(root, 'doc', 'index.html'),
        course: resolve(root, 'course', 'index.html'),
        camp: resolve(root, 'camp', 'index.html'),
        blog: resolve(root, 'blog', 'index.html'),
        contact: resolve(root, 'contact', 'index.html')
      }
    }
  }
})
