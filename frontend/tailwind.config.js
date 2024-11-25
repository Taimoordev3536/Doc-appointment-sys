/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5f6FFF",
        'custom-blue': '#E8F6F9',  // Custom primary color
        'light-pink': '#FBE0D0',  // Custom color for light pink
        'light-yellow': '#FEF5DE', // Custom color for light yellow
        'light-teal': '#DFEFEB',
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fill, minmax(200px, 1fr))',  // Custom grid template column
      },
    },
  },
  plugins: [],
}
