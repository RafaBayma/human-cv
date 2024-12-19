/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgbotão: "#2C3E50",
        corbotão: "#F4F4F4",
        marca: "#7F8C8D",
        textoazul: "#4a90e2",
      },
      fontFamily: {
        roboto: ["Roboto"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
