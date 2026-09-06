/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Inter', 'Arial', 'sans-serif'],
      },
      colors: {
        forest:  { DEFAULT: '#1A4A2E', dark: '#0F2E1C' },
        natural: { DEFAULT: '#2E7D52', light: '#EAF4EE' },
        water:   { DEFAULT: '#3B82F6', light: '#EBF4FF' },
        stone:   '#6B7280',
        cream:   '#FAFAF8',
        slate:   '#334155',
      },
    },
  },
  plugins: [],
}