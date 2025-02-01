/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B3F79",
        hover: "#122A50",
        secondary: "#D61E24",
        tertiary: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
