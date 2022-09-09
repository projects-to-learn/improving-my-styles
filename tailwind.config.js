/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff6f7",
          100: "#ffedef",
          200: "#ffd3d7",
          300: "#feb8be",
          400: "#fe838e",
          500: "#fd4e5d",
          600: "#e44654",
          700: "#be3b46",
          800: "#982f38",
          900: "#7c262e"
        },
        secondary: {
          50: "#fcf5ff",
          100: "#f9ebff",
          200: "#efcdff",
          300: "#e5aeff",
          400: "#d272ff",
          500: "#be35ff",
          600: "#ab30e6",
          700: "#8f28bf",
          800: "#722099",
          900: "#5d1a7d"
        },
        tertiary: {
          50: "#f9fcfe",
          100: "#f2f8fd",
          200: "#dfeef9",
          300: "#cbe3f6",
          400: "#a4cfef",
          500: "#7dbae8",
          600: "#71a7d1",
          700: "#5e8cae",
          800: "#4b708b",
          900: "#3d5b72"
        },
        neutral: {
          50: "#fbfcfe",
          100: "#f8f9fd",
          200: "#edf1fb",
          300: "#e1e8f9",
          400: "#cbd7f4",
          500: "#b5c6ef",
          600: "#a3b2d7",
          700: "#8895b3",
          800: "#6d778f",
          900: "#596175"
        },
        gray: {
          50: "#f8f8f9",
          100: "#f0f1f3",
          200: "#dadce1",
          300: "#c3c7cf",
          400: "#969eab",
          500: "#697487",
          600: "#5f687a",
          700: "#4f5765",
          800: "#3f4651",
          900: "#333942"
        }
      }
    }
  },
  plugins: []
};
