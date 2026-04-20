/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        border: 'var(--card-border)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
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
