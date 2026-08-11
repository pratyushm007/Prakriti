/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#fff9f0',
        parchment: '#EADCC6',
        clay: '#7A1F1F',
        wine: '#7A1F1F',
        ink: '#2a1812',
        gold: '#C8A15A',
        sage: '#6E7B5B',
        brown: '#8B5E34',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Lato', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 18px 50px rgba(89, 40, 24, 0.12)',
      },
    },
  },
  plugins: [],
}
