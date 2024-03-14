/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Black-portfolio": "#27272A",
        "Grey-dark": "#696969",
        "Grey-dark-light": "#E5E7EB",
        "White-portfolio": "#FCFBFA",
        Lavender: "#7E3AF2",
        "Lavender-red": "#E02424",
      },
      fontFamily: {
        Montserrat: ["Montserrat, sans-serif"],
      },
      container: {
        center: false,
        padding: {
          DEFAULT: "15px",
          sm: "15px",
          md: "39px",
          lg: "65px", // Example value for lg breakpoint
          xl: "85px",
          "2xl": "100px", // Example value for 2xl breakpoint
        },
      },

      backgroundImage: {
        "form-pattern": "url('https://jawdat860.github.io/Project1/build/img/background.jpeg')",
        "hero-md": "url('/build/img/heroMd.png')",
        hero: "url('/build/img/hero.png')",
        "hero-mob": "url('/build/img/background-mobile.png')",
        main: "url('/build/img/top-bg.png')",
      },
    },
  },
  plugins: [],
};
