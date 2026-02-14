import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['SplashScreenLogo.png', 'favicon.ico', 'robots.txt'],
      manifest: {
        name: 'ION PURE SOLUTIONS',
        short_name: 'IPS',
        description: 'Advanced Alkaline & Hydrogen Water Tech',
        theme_color: '#F1F8E1',
        background_color: '#FDFDFD',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'SplashScreenLogo.png', // Remove leading slash for PWA consistency
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'SplashScreenLogo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
})