const { readBuilderProgram } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif',
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      background: "#000212",
      "btn-purple": "#b535f6",
      purpleborder: "rgb(181,53,246, 0.2)",
      purplemaintext: "rgb(181,53,246, 1)",
      purpletext: "rgb(181,53,246, 0.8)",
      hovernavlink: "#cd69ff",
      "footer-bg": "#030328",
      "footer-text": "#443a83",
      "primary-text": "#F5D8FF",
    },
    fontSize: {
      xs: "1.3rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: "1.8rem",
      xl: ["2.2rem", "1.3"],
      "2xl": "2.4rem",
      "3xl": "2.6rem",
      "4xl": "3.2rem",
      "5xl": "4rem",
      "6xl": ["4.4rem", "1"],
      "7xl": ["4.8rem", "1"],
      "8xl": ["8rem", "1"],
    },

    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
      13: "5.2rem",
      14: "5.6rem",
    },
    backgroundImage: {
      "page-gradient": "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(158,60,233,0.3), transparent)",
      "glass-gradient": "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
    },
    boxShadow: {
      primary: "rgb(181 53 246 / 50%) 0px 1px 40px",
    },
    transitionDelay: {
      0: "0ms",
    },
  },
  plugins: [],
}
