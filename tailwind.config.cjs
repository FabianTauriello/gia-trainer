const colors = require("tailwindcss/colors");
delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["blueGray"];
delete colors["coolGray"];

module.exports = {
  important: true,
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      darkSlate: "#020617", // slate-950
      correct: "#16a34a", // green-600
      incorrect: "#dc2626", // red-600
    },
    extend: {
      backgroundImage: {
        // Created with slate 900 and 950
        "image-dark": "url(./assets/svgs/bg-image-dark.svg)",
        // Created with slate 200 and 300
        "image-light": "url(./assets/svgs/bg-image-light.svg)",
      },
      colors: {
        ...colors,
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" }), require("tailwindcss-animate")],
};

// TODO: PENDING DESIGN RULES
// SLATE SHADES FOR PRIMARY COLORS
// EMERALD SHADES FOR ACCENTS
