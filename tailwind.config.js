/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          navbar: "#63ae95",
          navbarTop: "#a3d9c5",
          navtext: {
            primary: "#ffffff",
            secondary: "#1a1a1a",
            hover: "#393969",
          },
          button: {
            primary: "#e57373",
            primaryHover: "#d04a4a",
            secondary: "#256a73",
            secondaryHover: "#1b5a66",
          },
          text: {
            primary: "#04313f",
            secondary: "#b0b7b5",
            hover: "#256a73",
          },
          border: "#b0b7b5",
          shadow: "#d1d1d1",
          accent: {
            primary: "#63ae95",
            secondary: "#e57373",
          },
        },
        dark: {
          navbar: "#2c3e50",
          navbarTop: "#34495e",
          navtext: {
            primary: "#ffffff",
            secondary: "#e0e0e0",
            hover: "#256a73",
          },
          button: {
            primary: "#b83e3e",
            primaryHover: "#a32e2e",
            secondary: "#153c44",
            secondaryHover: "#102a33",
          },
          text: {
            primary: "#ffffff", // Changed to white
            secondary: "#b0b7b5",
            hover: "#e2d8b8",
          },
          border: "#1f4d3f",
          shadow: "#0a0a0a",
          accent: {
            primary: "#1f4d3f",
            secondary: "#b83e3e",
          },
        },
      },
      backgroundImage: {
        "light-gradient": "linear-gradient(to bottom, #fefbe9, #f5eedd)",
        "dark-gradient": "linear-gradient(to bottom, #04313f, #0a3a3f)",
      },
    },
  },
  plugins: [],
};
