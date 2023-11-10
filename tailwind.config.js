/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      bgLight: '#EBF5FC80',
      bgItemsLight: '#d9d9d9',
      textColorLight:'#000000',
    },
    extend: {},
  },
  plugins: [],
}

