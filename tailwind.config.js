/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          40: "#111722",
          30: "#182233",
          20: "#1A2942",
          10: "#283854"
        }
      }
    }
  },
  plugins: []
};
