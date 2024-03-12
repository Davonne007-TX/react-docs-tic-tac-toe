/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mon: "'Montserrat Alternates', sans-serif",
        titan: "'Titan One', sans-serif",
      },
      colors: {
        myTeal: "#00CAB1",
      },
    },
  },
  plugins: [],
};
