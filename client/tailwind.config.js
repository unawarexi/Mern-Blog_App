/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#618264",
        bg_variant: "#79AC78",
        text_light: "#959EAD",

        soft: {
          primary: "#B0D9B1",
          primary_variant: "#D0E7D2",
          compliment: "#FAF1E4",
        },

        dark: {
          colorfirst: "#040D12",
          colorsecond: "#183D3D",
          colorthird: "#435334",
          colorfourth: "#5C8374",

        }
      },

      font: {
        opensans: ["'Open Sans'", "san-serif"],
        roboto: ["'Roboto'",  "san-serif"],
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: [], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "d-",
  },
}

