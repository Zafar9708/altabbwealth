/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          background: '#8BC53F', // light cream background
          text: '#14274E',       // deep navy text
          gold: '#8BC53F',       // infinity logo gold
        },
      },
    },
  },
  plugins: [],
};
