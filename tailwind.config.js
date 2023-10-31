/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'white-transparent': 'hsla(0, 0, 100%, .8)',
        'link': 'hsla(212, 100%, 48%, 1)',
      },
      boxShadow: {
        'inset-bottom': 'inset 0 -1px 0 0 #eee',
        'box': '0 0 0 1px rgba(0, 0, 0, .08)',
        'inset-top': 'inset 0 1px 0 0 #eee'
      },
      gridTemplateColumns: {
        'auto-sm': 'repeat(auto-fill,minmax(140px,1fr))',
        'auto': 'repeat(auto-fill,minmax(300px,1fr))',
        'center-wide': '1fr 1.2fr 1fr',
        'center-narrow': '2fr .5fr 2fr',
      }
    },
  },
  plugins: [],
}
