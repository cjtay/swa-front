module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "white-transparent": "rgba(255, 255, 255, 0.75)",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
