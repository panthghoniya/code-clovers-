/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clover: {
          primary: '#0B8F4D',
          dark: '#030303',
          card: '#0D0D0D',
          accent: '#22C55E',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#888888',
        }
      },
      fontFamily: {
        /* User requested custom fonts with elegant fallbacks */
        sans: ['Aestera', 'system-ui', 'sans-serif'],
        gasdrifo: ['Gasdrifo', '"Bodoni Moda"', 'serif'],
        qurova: ['Qurova', '"Bodoni Moda"', 'serif'],
        nevera: ['Nevera', '"Bodoni Moda"', 'serif'],
        casko: ['Casko', '"Bodoni Moda"', 'serif'],
        aestera: ['Aestera', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        'glow': '0 0 40px rgba(34, 197, 94, 0.1)',
        'glow-strong': '0 0 30px rgba(34, 197, 94, 0.4)',
      }
    },
  },
  plugins: [],
}
