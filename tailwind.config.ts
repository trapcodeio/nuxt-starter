import type { Config } from "tailwindcss";

export default <Config>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
