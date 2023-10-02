/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#9754CB",
        accentDark: "#6237A0",
        accentDarker: "#28104E",
        accentLight: "#DEACF5",
        inputBgGray: "#f2f3f5",
        background: "#fbf6fe"
      },
      container: {
        center: true,
        padding: "15px"
      }
    },
  },
  plugins: [],
}
