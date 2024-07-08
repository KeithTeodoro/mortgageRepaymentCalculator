/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor1: "#e3f4fc",
        primaryTextColor: "#133040",
        secondaryTextColor: "#658294",
        buttonColor: "#d4d92e",

        customColor2: "#0e2431",
      },
    },
  },
  plugins: [],
};
