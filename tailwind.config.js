/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ion Pure "Elegant Light" Palette
        ionMint: "#F1F8E1",      // Main Background (Soft, clean)
        ionBlue: "#2C5DA7",      // Primary Brand Blue
        ionGreen: "#7CB35B",     // Organic Accent
        ionSlate: "#7399C6",     // Secondary/Muted Blue
        ionMidnight: "#1A365D",   // High-Contrast Text (No Black)
      },
      fontFamily: {
        display: ['Lexend', 'Inter', 'sans-serif'], // Professional/Architectural
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        // Very subtle blue-tinted shadows for depth without "weight"
        'elegant': '0 4px 20px -2px rgba(44, 93, 167, 0.08)',
      },
      animation: {
        'gradient-text': 'gradient 3s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      }
    },
  },
  plugins: [],
}