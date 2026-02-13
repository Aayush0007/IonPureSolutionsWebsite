import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['SplashScreenLogo.png'], 
      manifest: {
        // This is the name displayed under the icon on the home screen
        name: 'ION PURE SOLUTIONS', 
        short_name: 'IPS',
        description: 'Advanced Alkaline & Hydrogen Water Tech',
        theme_color: '#F1F8E1',
        background_color: '#FDFDFD',
        display: 'standalone',
        // Mapping the icon to your public folder asset
        icons: [
          {
            src: '/SplashScreenLogo.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/SplashScreenLogo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})