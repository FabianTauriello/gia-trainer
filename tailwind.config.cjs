const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      // center: true,
    },
    fontFamily: {
      inter: ["Inter"],
    },
    colors: {
      correct: "#15803D",
      incorrect: "#B91C1C",
      // TODO need this because 950 shades not working :(
      darkSlate: "#020617",
    },
    extend: {
      backgroundImage: {
        // created with slate 900 and 950
        "image-dark": "url(./src/assets/svgs/bg-image-dark.svg)",
        // created with slate 200 and 300
        "image-light": "url(./src/assets/svgs/bg-image-light.svg)",
      },
      colors: {
        ...colors,
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
};

// TODO: PENDING DESIGN RULES
// SLATE SHADES FOR PRIMARY COLORS
// EMERALD SHADES FOR ACCENTS
