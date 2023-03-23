/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#584D44",
        primary: "#240F0B",
        dark: "#111514",
        secondary: "#E3C893",
        error: "#851E0B",
        success: "#A4BE63",
      },
    },
  },
  // plugins: [require("daisyui")],
};
