module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
