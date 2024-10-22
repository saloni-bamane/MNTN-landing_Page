/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        chronicle: ["Chronicle Display", "serif"],
        gilroy: ["Gilroy", "sans-serif"],
      },
      fontWeight: {
        extrabold: 800,
        semibold: 600,
        bold: 700,
        medium: 500,
      },
      colors: {
        backgroundColor: "#0B1D26",
        accent: "#FBD784",
      },
      backgroundImage: {
        // "hero-image": "url('./assests/images/img.png')",
      },
    },
  },
  plugins: [],
};
