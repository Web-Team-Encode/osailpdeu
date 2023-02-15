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
        Roboto: "Roboto, sans-serif",
      },
      gridTemplateColumns: {
        "1/3": "1fr 3fr",
        "1.2/3": "1.2fr 3fr",
      },
      height:{
        100:"29rem"
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({nocompatible: true})],
}
