/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: "./tailwind.config.js",
  content: ["./app/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1d232a",
      },
    },
  },
  plugins: [
    require("daisyui"),
    "prettier-plugin-tailwindcss",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
