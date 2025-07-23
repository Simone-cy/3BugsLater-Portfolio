import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Ottimizzazioni per SEO e performance
    rollupOptions: {
      output: {
        // Ottimizza i nomi dei file per il caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      }
    },
    // Migliora la compressione
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Rimuove i console.log in produzione
        drop_debugger: true
      }
    }
  },
  // Pre-carica i moduli per migliorare le performance
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
