/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        bg: '#111111',
        surface: '#1a1a1a',
        border: '#222222',
        'text-primary': '#ffffff',
        'text-secondary': '#888888',
        'text-tertiary': '#555555',
        accent: '#22c55e',
      },
    },
  },
  plugins: [],
}
