/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        cmnBg: "#D1A054",
      },
    },
  },
  plugins: [require("daisyui")],
};
