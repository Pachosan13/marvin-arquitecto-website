/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#ffffff',
        cement: '#f3f3f3',
        dark: '#0d0d0d',
        accent: '#b56d4e',
        brandBlue: '#1e3a8a',
        muted: '#929292',
        'surface-dark': '#121212',
        'surface-light': '#f8f8f8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        "soft-lg": '0 40px 80px -40px rgba(13, 13, 13, 0.35)',
      },
    },
  },
  plugins: [],
};
