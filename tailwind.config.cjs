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
      // TODO need this because 950 shades not working :(
      darkSlate: "#020617",
    },
    extend: {
      backgroundImage: {
        // created with slate 900 and 950
        // TODO remove old
        // "image-dark": "url(./src/assets/svgs/bg-image-dark-old.svg)",
        "image-dark": "url(./src/assets/svgs/bg-image-dark.svg)",
        // created with slate 200 and 300
        // TODO remove old
        // "image-light": "url(./src/assets/svgs/bg-image-light-old.svg)",
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
