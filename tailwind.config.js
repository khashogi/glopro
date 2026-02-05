/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        glopro: {
          DEFAULT: '#00BCD4',
          dark: '#0097A7',
          light: '#26C6DA',
        },
        dark: {
          DEFAULT: '#2C2C2C',
          light: '#484848',
        },
        neutral: {
          DEFAULT: '#484848',
          light: '#767676',
        },
        background: '#F7F7F7',
      },
      fontFamily: {
        sans: ['var(--font-circular)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.12)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
