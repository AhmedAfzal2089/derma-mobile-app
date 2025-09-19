/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'itv-teal': '#00B89C',
        'yahoo-purple': '#430297',
        'yahoo-pink': '#C50091',
        'itv-news-blue': '#0047B3',
        'itv-x-green': '#A3CC00',
      },
    },
  },
  plugins: [],
}