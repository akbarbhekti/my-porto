import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['myphoto.png', 'favicon.svg'],
      manifest: {
        name: 'Akbar Bhekti Portfolio',
        short_name: 'AkbarDev',
        description: 'Web & Software Engineer Portfolio',
        theme_color: '#0A0D10',
        background_color: '#0A0D10',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: '/myphoto.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/myphoto.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})