/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Trebuchet MS"', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
}