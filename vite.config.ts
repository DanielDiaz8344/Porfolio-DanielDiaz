import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // Modern browsers only — React 19 + Tailwind v4 require no legacy support
    target: 'es2020',

    // Each lazy-loaded chunk gets its own CSS file
    cssCodeSplit: true,

    rollupOptions: {
      output: {
        manualChunks: {
          // React core — changes rarely, great for long-term cache
          'vendor-react': ['react', 'react-dom'],

          // Animation libs share internals — keep together
          'vendor-motion': ['motion', 'motion/react', 'framer-motion'],

          // GSAP ecosystem
          'vendor-gsap': ['gsap', 'gsap/ScrollTrigger', '@gsap/react'],

          // WebGL — heavy, changes infrequently
          'vendor-ogl': ['ogl'],

          // Smooth scroll
          'vendor-lenis': ['lenis'],

          // Router
          'vendor-router': ['react-router-dom'],

          // UI utilities — small, stable
          'vendor-ui': [
            'lucide-react',
            'react-icons',
            'clsx',
            'tailwind-merge',
            'class-variance-authority',
            'radix-ui',
          ],
        },

        // Organized output with content hashes for cache busting
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash][extname]',
      },
    },
  },
})
