/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0a0b',
          900: '#121214',
          800: '#1a1a1f',
          700: '#24242b',
          600: '#34343d',
        },
        accent: {
          DEFAULT: '#5b6cff',
          light: '#7c8bff',
          soft: '#8b5cf6',
          glow: 'rgba(91, 108, 255, 0.35)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        glow: '0 0 80px -20px rgba(91, 108, 255, 0.5)',
        card: '0 20px 60px -30px rgba(0,0,0,0.8)',
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
};
