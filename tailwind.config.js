/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mons: ["Montserrat", "sans-serif"],
        ubun: ["Ubuntu", "sans-serif"],
        ops:["Black Ops One", "system-ui"]

      },
      colors: {
        imp: "#146C94",
        primary: "#19A7CE",
        light:"#AFD3E2",
        background:"#F6F1F1"
      },
    },
  },
  plugins: [],
};
