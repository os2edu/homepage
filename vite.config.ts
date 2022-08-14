import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'docs')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        source: resolve(root, 'Source', 'index.html'),
        doc: resolve(root, 'Doc', 'index.html'),
        course: resolve(root, 'Course', 'index.html'),
        camp: resolve(root, 'Camp', 'index.html'),
        blog: resolve(root, 'Blog', 'index.html'),
        contact: resolve(root, 'Contact', 'index.html')
      }
    }
  }
})
