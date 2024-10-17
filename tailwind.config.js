/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Alegreya: "Alegreya Sans SC",
      },
      backgroundColor: {
        secondary: "#282c34",
      },
      screens: {
        mid_lg: "880px",
      },
    },
  },
  plugins: [],
};
