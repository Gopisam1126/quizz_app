/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      backgroundImage: {
        "main-background": "url('images/gradient_des_teal-purple.jpg')",
        "bg-sec": "url('images/gradient_des_blue.jpg')",
      },
      backdropSepia: {
        25: '.25',
        75: '.75',
        50: '.50',
        100: '1.00'
      }
    },
  },
  plugins: [],
};
