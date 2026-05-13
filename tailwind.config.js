/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cinzel Decorative"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        nav: ['Cinzel', 'serif'],
      },
      colors: {
        heritage: {
          bg: '#FDF8F0',
          card: '#FFFCF7',
          text: '#1a0a2e',
          muted: '#7A6A5A',
          border: '#E8D8C0',
          gold: '#C8920A',
          goldLight: '#FAC775',
          green: '#1D9E75',
          red: '#D85A30',
        },
      },
      boxShadow: {
        heritage: '0 18px 60px rgba(65, 35, 12, 0.14)',
      },
    },
  },
  plugins: [],
}
