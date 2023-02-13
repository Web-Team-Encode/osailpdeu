/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whitePrimary: "#FDF7E7",
        blueSecondary: {
          100: "#81A6B8",
          800: "#1F3D53",
        },
        redTertiary: "#F76B52",
      },
      fontFamily: {
        "Roboto": "Roboto, sans-serif",
      },
    },
  },
  plugins: [],
}
