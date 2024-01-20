/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        heroshop: "url('assets/float-burger.png')",
        fimg: "url('assets/fimg.jpg')"
      },
      colors:{
        primary: "#e84242",
        second: "#f5e7c1"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      
    },
  },
  plugins: [],
};

