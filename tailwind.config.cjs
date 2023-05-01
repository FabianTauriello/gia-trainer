module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      // center: true,
    },
    fontFamily: {
      inter: ["Inter"],
    },
    extend: {
      colors: {
        // light theme colors
        white: "#FFFFFF",
        black: "#000000",
        primary: "#0B1927",
        secondary: "#00C6B7",
        cream: "#FFF7D6",
        // quiz question colors
        correct: "#15803D",
        incorrect: "#B91C1C",
        // misc
        // bgCard: "#f9fafb",
        // background: "#f9fafb",
        // darkGray: "#ebeced",
        // gray "#d1d5db"
      },
    },
  },
  plugins: [],
};
