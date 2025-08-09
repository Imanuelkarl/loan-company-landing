/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e6f0ff',
          200: '#b3d1ff',
          300: '#80b3ff',
          400: '#4d94ff',
          500: '#1a75ff',
          600: '#0066e6',
          700: '#0052b3',
          800: '#003d80',
          900: '#00294d',
        },
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #00294d 0%, #0066e6 100%)',
        'blue-gradient-light': 'linear-gradient(135deg, #1a75ff 0%, #4d94ff 100%)',
      },
    },
  },
  plugins: [],
}