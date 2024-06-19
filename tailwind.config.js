/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: "./tailwind.config.js",
  content: ["./src/app/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1d232a",
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
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
