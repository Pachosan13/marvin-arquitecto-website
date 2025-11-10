/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F7F5F1',        // Porcelain base
        section: '#EEE9E2',   // Linen
        panel: '#E2D7C8',     // Sand
        'text-hi': '#2B2F33', // Charcoal
        'text-lo': '#6C6A65', // Greige
        wood: '#C8A98B',      // Wood accent
        divider: '#DDD5CC',
        cta: '#6FA27A',       // Sage
        'cta-hover': '#5B8E66',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'heading-1': ['2.5rem', { lineHeight: '1.1', fontWeight: '600' }], // 40px for mobile
        'heading-2': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }], // 40px
        'heading-3': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }], // 28px
        'heading-4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }], // 20px
        'body': ['1.125rem', { lineHeight: '1.7' }], // 18px
      },
      animation: {
        'ken-burns': 'ken-burns 14s ease-in-out infinite alternate',
        'marquee': 'marquee 30s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1.03)' },
          '100%': { transform: 'scale(1.08)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fade-up': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};