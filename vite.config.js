/* eslint-disable @babel/object-curly-spacing */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir:"public/pictures",
  build: {
     
    /* rollupOptions: {
      input:["./index.html"],
      output:{
        entryFileNames:'[name].js',
        chunkFileNames:'[name].js',
        assetFileNames:'[name].[ext]'
      }
    }, */
  }
})
