import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';


import VitePluginGhPages from 'vite-plugin-gh-pages';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  
    VitePWA(),
   
    VitePluginGhPages({
      branch: 'gh-pages', // Optional: Specify the branch to deploy to
      dir: 'dist', // Optional: Specify the build output directory
    }),],
})
