/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1B73E8",
      },
    },
  },
  plugins: [],
};
