/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EFF4FB",
        secondary: "#1456CC"
      },
      backgroundImage: {
        linear: "linear-gradient(0deg, rgba(239,244,251,0.9725140056022409) 24%, rgba(239,244,251,0.2) 85%)"
      }
    },
  },
  plugins: [],
}

