/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        background: 'var(--background-color)',
        primaryGreen: 'var(--primary-green-color)',
        secondaryGreen: 'var(--secondary-green-color)',
        primaryBrown: 'var(--primary-brown-color)',
        secondaryBrown: 'var(--secondary-brown-color)',
      }
    },
  },
  plugins: [],
}
