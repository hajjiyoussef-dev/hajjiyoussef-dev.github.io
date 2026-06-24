/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "rgba(6, 182, 212, 0.3)", // cyan border
        ring: "rgba(6, 182, 212, 0.5)",
      },
    },
  },
  plugins: [],
};
