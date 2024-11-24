/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      white: "#fff",
      blue: "#1d72d2",
      dark56: "#323a56",
      d2: "#1d72d2",
      a5: "#8a90a5",
      f7: "#eff2f7",
      fc: " #f8fafc",
      b3: "#70c63b",
      f4: "#f4fff4",
      dark47: "#313647",
      e7: "#fffae7",
      a4444:"#ecc744",
      ff:"#f1f8ff",
      d2d2:"#1d72d2",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        pop: ["Poppins"],
        pro: ["SF Pro Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
