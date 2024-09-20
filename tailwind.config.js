/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          // Background gradient
          background: "linear-gradient(to bottom, #fdf9e4, #63ae95)", // Gradiente de crema a verde suave
          navbar: "#63ae95", // Verde suave para la navbar en modo claro
          navbarTop: "#fdf9e4", // Crema claro para la parte superior de la navbar
          button: {
            primary: "#e57373", // Coral suave para botones primarios
            primaryHover: "#d04a4a", // Coral más intenso para hover
            secondary: "#256a73", // Azul medio para botones secundarios
            secondaryHover: "#1b5a66", // Azul oscuro para hover
          },
          text: {
            primary: "#04313f", // Azul oscuro para textos principales
            secondary: "#b0b7b5", // Gris medio para textos secundarios
            hover: "#256a73", // Azul medio para texto en hover
          },
          border: "#b0b7b5", // Gris medio para bordes
          shadow: "#d1d1d1", // Sombra suave
          accent: {
            primary: "#63ae95", // Verde suave para acentos primarios
            secondary: "#e57373", // Coral suave para acentos secundarios
          },
        },
        dark: {
          // Background gradient
          background: "linear-gradient(to bottom, #04313f, #2f6d5f)", // Gradiente de azul oscuro a verde oscuro
          navbar: "#2f6d5f", // Verde oscuro para la navbar en modo oscuro
          navbarTop: "#1a4751", // Azul más oscuro para la parte superior de la navbar
          button: {
            primary: "#c94e4e", // Coral oscuro para botones primarios
            primaryHover: "#b83e3e", // Coral profundo para hover
            secondary: "#1a4751", // Azul más oscuro para botones secundarios
            secondaryHover: "#153c44", // Azul más profundo para hover
          },
          text: {
            primary: "#fdf9e4", // Crema claro para textos principales
            secondary: "#e2d8b8", // Crema oscuro para textos secundarios
            hover: "#e2d8b8", // Crema claro para texto en hover
          },
          border: "#2f6d5f", // Verde oscuro para bordes
          shadow: "#1a1a1a", // Sombra oscura
          accent: {
            primary: "#2f6d5f", // Verde oscuro para acentos primarios
            secondary: "#c94e4e", // Coral oscuro para acentos secundarios
          },
        },
      },
    },
  },
  plugins: [],
};
