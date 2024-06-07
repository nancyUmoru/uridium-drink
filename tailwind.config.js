/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Rubik: ["Rubik", "sans-serif"],
      DM_Sans: ["DM Sans", "sans-serif"],
      Jockey_One: ["Jockey One", "sans-serif"],
      Hind: ["Hind", "sans-serif"],
      Inknut_Antiqua: ["Inknut Antiqua", "sans-serif"],
      Inria_Sans: ["Inria Sans", "sans-serif"],
    },

    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    extend: {},
  },
  plugins: [],
}