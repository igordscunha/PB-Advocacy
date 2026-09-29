/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1240px' },
    },
    extend: {
      colors: {
        navy: {
          950: '#041620',
          900: '#08202E',
          800: '#012E40',
          700: '#0B3C52',
          600: '#025374',
        },
        gold: {
          200: '#EFE2C4',
          300: '#E2CB98',
          400: '#D2B274',
          500: '#BF9A57',
          600: '#A07E3F',
        },
        ivory: {
          50: '#FCFBF8',
          100: '#F7F4EE',
          200: '#EEE8DC',
          300: '#DDD4C3',
        },
        ink: '#17252F',
        'verde-zap': '#25D366',
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.28em',
      },
      boxShadow: {
        soft: '0 20px 50px -20px rgba(4, 22, 32, 0.25)',
        card: '0 30px 60px -30px rgba(4, 22, 32, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1.12)' },
          '100%': { transform: 'scale(1)' },
        },
        'scroll-hint': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.4' },
        },
      },
      animation: {
        'fade-up': 'fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slow-zoom': 'slow-zoom 12s ease-out both',
        'scroll-hint': 'scroll-hint 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
