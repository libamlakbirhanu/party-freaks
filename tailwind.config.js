/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        first: {
          "0%, 50%, 100%": {
            transform: "rotate(10deg) scale(0.4)",
          },

          "40%": {
            transform: "rotate(50deg) scale(0.4)",
          },
        },
        second: {
          "0%, 50%, 100%": {
            transform: "rotate(10deg) scale(0.6)",
          },

          "40%": {
            transform: "rotate(50deg) scale(0.6)",
          },
        },
        third: {
          "0%, 50%, 100%": {
            transform: "rotate(10deg) scale(0.8)",
          },

          "40%": {
            transform: "rotate(50deg) scale(0.8)",
          },
        },
        fourth: {
          "0%, 50%, 100%": {
            transform: "rotate(10deg) scale(1)",
          },

          "40%": {
            transform: "rotate(50deg) scale(1)",
          },
        },
      },
      animation: {
        first: "first 1.2s ease-in-out infinite",
        second: "second 1.2s 0.1s ease-in-out infinite",
        third: "third 1.2s 0.2s ease-in-out infinite",
        fourth: "fourth 1.2s 0.3s ease-in-out infinite",
      },
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
