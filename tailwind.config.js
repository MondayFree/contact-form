/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green-light": "hsl(148, 38%, 91%)",
        "primary-green-medium": "hsl(169, 82%, 27%)",
        "primary-green-red": "hsl(0, 66%, 54%)",
        "neutral-white": "hsl(0, 0%, 100%)",
        "neutral-grey-medium": "hsl(186, 15%, 59%)",
        "neutral-grey-darker": "hsl(187, 24%, 22%)"
      },
      fontFamily: {
        karla: "Karla"
      }
    },
  },
  plugins: [],
}

