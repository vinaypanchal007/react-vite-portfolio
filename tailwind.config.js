/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050816"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56,189,248,.15), 0 8px 40px rgba(56,189,248,.15)"
      }
    },
  },
  plugins: [],
}