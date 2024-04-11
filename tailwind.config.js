/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: [
      "variant",
      [
        "@media (prefers-color-scheme: dark) { &:not(.light *) }",
        "&:is(.dark *)",
      ],
    ],
    boxShadow: {
      "3xl": "0px 0px 5px rgba(0, 0, 0, 0.15)",
    },
    container: {
      center: true,
    },

    fontFamily: {
      pacifico: ["Pacifico", "cursive"],
      cedarville: ["Cedarville Cursive", "cursive"], // Use 'Pacifico' as the font family
    },
    colors: {
      custom: {
        bgColor: "var(--bgColor)",
        bgFooter: "var(--bgFooter)",
        bgInput: "var(--bgInput)",
        bgTimer: "var(--bgTimer)",
        bgButton: "var(--bgButton)",
        bgButtonHover: "var(--bgButtonHover)",
        checkMarkBorder: "var(--checkMarkBorder)",
        checkMark: "var(--checkMark)",
        ringFocus: "var(--ringFocus)",
        headingsColor: "var(--headingsColor)",
        baseTextColor: "var(--baseTextColor)",
        textFooterHeader: "var(--textFooterHeader)",
      },
    },
    extend: {
      backgroundImage: {
        "header-bg": "url('../../src/imgs/header-bg.png')",
        "sm-header-bg": "url('../../src/imgs/sm-header-bg.png')",
      },
    },
  },
  plugins: [],
};
