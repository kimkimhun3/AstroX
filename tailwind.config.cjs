/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
				horizonAnimated: "url('/assets/svg/backgrounds/horizon-animated.svg')",
				horizon: "url('/assets/svg/backgrounds/horizon.svg')",
			},
      colors: {
        gray: colors.neutral,
      },
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
        charter: ['Charter', 'serif'],
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
