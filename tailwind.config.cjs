// @type {import('tailwindcss').Config}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // main theme colors
      black: "#000000",
      white: "#FFFFFF",
      primary: "#0B1927",
      green: "#00C6B7",
      cream: "#FFF7D6",
      // colors used for debugging only
      red: "#E01A4F",
      yellow: "#F9C22E",
      blue: "#53B3CB",
    },
    fontFamily: {
      inter: ["Inter"],
    },
    extend: {},
  },
  plugins: [],
};
