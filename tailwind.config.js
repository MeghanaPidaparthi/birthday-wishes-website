/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: "#ffd1dc",
        skyBlue: "#87cefa",
        aurora: "#d6f8ff",
      },
    },
  },
  plugins: [],
};
