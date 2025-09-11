/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f8f9fa",
        foreground: "#212529",
        card: "#ffffff",
        muted: "#6c757d",
        primary: "#3b82f6"
      }
    }
  },
  plugins: [],
  darkMode: "class", // activa modo oscuro mediante la clase 'dark'
};
