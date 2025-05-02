/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBg: "#111111",
        lightText: "#0C0E16",
        darkBg: "#141625",
        darkText: "#ffffff",
      },
    },
  },
  plugins: [],
};
