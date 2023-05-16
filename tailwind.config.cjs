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
        primary: {
          50: "#DBE8F5",
          100: "#B7D1EB",
          200: "#70A3D7",
          300: "#3475B7",
          400: "#1F476F",
          500: "#0B1927",
          600: "#091420",
          700: "#070F18",
          800: "#040A10",
          900: "#020508",
          950: "#010304",
        },
        secondary: "#00C6B7",
        cream: "#FFF7D6",
        correct: "#15803D",
        incorrect: "#B91C1C",
      },
      backgroundImage: {
        dark: "url(./src/assets/svgs/cv.svg)", //TODO rename file
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
};
