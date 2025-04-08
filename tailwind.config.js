/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: '#fbcfe8',
        pastelBlue: '#c7d2fe',
        pastelPurple: '#e9d5ff',
        pastelMint: '#d1fae5',
        pastelYellow: '#fef9c3',
      },
      backgroundImage: {
        dreamy: 'linear-gradient(-45deg, #fbcfe8, #e9d5ff, #c7d2fe, #d1fae5)',
      },
      backgroundSize: {
        '400': '400% 400%',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        gradientFlow: 'gradientFlow 15s ease infinite',
      },
      keyframes: {
        gradientFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};
