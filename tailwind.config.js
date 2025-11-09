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
          background: '#FAF1E6', // light cream background
          text: '#14274E',       // deep navy text
          gold: '#C6A04A',       // infinity logo gold
        },
      },
    },
  },
  plugins: [],
};
