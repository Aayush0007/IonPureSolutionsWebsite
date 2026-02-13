import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['SplashScreenLogo.png', 'Logo.png'],
      manifest: {
        name: 'Ion Pure Solutions',
        short_name: 'IonPure',
        description: 'Premium Alkaline & Hydrogen Water Technology',
        theme_color: '#F1F8E1', // Matches ionMint palette
        background_color: '#FDFDFD',
        display: 'standalone',
        icons: [
          {
            src: '/SplashScreenLogo.png', // Reference: Master Documentation Section 3
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/SplashScreenLogo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})