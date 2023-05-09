/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "Primary-Light-Cyan": "hsl(193, 38%, 86%)",
      "Primary-Neon-Green": "hsl(150, 100%, 66%)",
      "Neutral-Grayish-Blue": "hsl(217, 19%, 38%)",
      "Neutral-Dark-Grayish-Blue": "hsl(217, 19%, 24%)",
      "Neutral-Dark-Blue": "hsl(218, 23%, 16%)",
    },
    extend: {},
  },
  plugins: [],
};
