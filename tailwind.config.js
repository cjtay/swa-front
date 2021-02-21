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
        "black-transparent": "rgba(0, 0, 0, 0.2)",
        "swa-1": "rgb(112, 48, 140)",
        "swa-2": "rgb(69, 10, 94)",
        "swa-3": "rgb(135, 75, 161)",
        "swa-4": "rgb(243, 210, 255)",
        "swa-5": "rgba(132, 137, 199, 1)",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
