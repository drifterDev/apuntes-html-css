/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
    },
    extend: {
      colors: {
        danger: "#ff5f40",
        info: {
          100: "#24a19c",
          200: "#6abfb5",
        },
      },
    },
  },
  plugins: [],
};
