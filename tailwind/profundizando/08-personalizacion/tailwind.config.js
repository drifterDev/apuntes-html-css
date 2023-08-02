/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // darkMode: "class", Modo manual
  darkMode: "media", //Modo automatico
  presets: [require("./presents/mypresent")],
  theme: {
    screens: {
      sm: "600px",
      md: "800px",
      lg: "1000px",
    },
    // colors: {
    //   blue: {
    //     dark: "#084a80",
    //     light: "#74d1ee",
    //     default: "#277abe",
    //   },
    // },
    extend: {
      screens: {
        pantallaGrande: "1080px",
      },
      colors: {
        azul: {
          dark: "#084a80",
          light: "#74d1ee",
          default: "#277abe",
        },
      },
    },
  },
  plugins: [],
};
