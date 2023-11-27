/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "body-lg": "1rem",
        body: ".875rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
