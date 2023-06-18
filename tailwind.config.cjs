const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {},
    fontFamily: {
      inter: ["Inter"],
    },
    colors: {
      darkSlate: "#020617", // slate-950
      correct: "#16a34a", // green-600
      incorrect: "#dc2626", // red-600
    },
    extend: {
      backgroundImage: {
        // Created with slate 900 and 950
        "image-dark": "url(./src/assets/svgs/bg-image-dark.svg)",
        // Created with slate 200 and 300
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
