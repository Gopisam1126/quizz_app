/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-background' : "url('images/gradient_des_teal-purple.jpg')",
        'bg-sec': "url('images/gradient_des_blue.jpg')"
      },
    },
  },
  plugins: [],
}