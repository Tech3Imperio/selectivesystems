/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14ff72cb",
        secondary: "#e4e4e4",
      },
      fontFamily: {
        poppins: "poppins-regular",
        raleway: "raleway",
      },
      screens: {
        xl4: "1920px", // Custom breakpoint for 1920px and above
      },
      container: {
        center: true,
        // padding: {
        //   DEFAULT: "1rem",
        //   sm: "2rem",
        //   lg: "4rem",
        //   xl: "5rem",
        //   "2xl": "8rem",
        // },
      },
    },
  },
  plugins: [],
};
