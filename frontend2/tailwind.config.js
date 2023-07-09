/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        blue: "#2557f5",
      },
      padding: {
        buttonY: "2px",
        outlet: "72.22px",
      },
    },
  },
  plugins: [],
};
