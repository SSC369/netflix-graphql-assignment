/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        netflix: "#e50914",
        primary: "#181818",
      },
    },
  },
  plugins: [],
};
