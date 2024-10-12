/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-light": "#111A27",
        "bg-darker": "#0E1621",
        "bg-intro": "#172D2F",
      },
      boxShadow: {
        "shadow-intro": "0px 4px 75px 0px rgba(37, 210, 149, 0.09)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
