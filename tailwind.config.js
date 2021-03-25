module.exports = {
  // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["sweet_sans_promedium", "system-ui"],
      serif: ["ttramillas-extralightregular", "Georgia"],
      serifitalic: ["ttramillas-extralightitalicRg", "Georgia"],
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".5em",
    },
    extend: {
      colors: {
        wine: "#66191D",
        wineLight: "#D76369",
        marigold: "#E2A361",
        olive: "#6B6B54",
        linen: "DBCDC7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
