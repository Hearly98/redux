/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple": "#6202B6",
        "purple-600": "#9312FF",
        "custom-menu": "#4D5862",
        "light-white": "rgba(255,255,255,0.17)",
      },
      fontFamily: {
        'poppins': ['Poppins'],
      }
    },
  },
  plugins: [],
}

