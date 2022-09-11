/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Other extends
      backgroundImage: {
        'pic-1': "url('../public/gema.png')",
      }
    },
  },
  plugins: [],
};
