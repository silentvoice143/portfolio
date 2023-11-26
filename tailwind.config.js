/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        darkgray: "#212336",
        lightgray: "#23263a",
        lightergray: "#2b2d41",
        pred: "#ff4a57",
      },
      fontFamily: {
        paci: ["Pacifico"],
        roboto: ["Roboto"],
        mont: ["Montserrat"],
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
  ],
};
