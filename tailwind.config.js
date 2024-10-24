/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,css}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#262626',
      'gray': '#f5f5f5',
      'dark-gray': '#737373',
      'accent': '#bef264',
    },
    extend: {},
  },
  plugins: [],
}