/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-pb': '#012E40',
        'verde-zap': '#25d366',
        'bg-branco': '#ededed'
      }
    },
  },
  plugins: [],
}

