/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom': '5px 2px 2px 2px rgba(162, 229, 247, 1)',
      }
    },
  },
  plugins: [],
}

