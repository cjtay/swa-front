module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    truncate: {
      lines: {
        1: "1",
        2: "2",
        3: "3",
        5: "5",
        8: "8",
      },
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
      zIndex: {
        n10: "-10",
        n100: "-100",
      },
      backgroundImage: theme => ({
        "hero-pattern": "url('../images/bg-1.svg')",
        "featured-pattern": "url('../images/bg-3.svg')",
        "sponsor-pattern": "url('../images/bg-2.svg')",
      }),
    },
    variants: {
      extend: {},
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    // ...
  ],
  variants: {
    lineClamp: ["responsive", "hover"],
  },
};
