/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        'olive': '#627254',
        'pale_olive': '#76885B',
        'light_grey': '#DDDDDD1',
        'whitish': '#EEEEEE'
      }
    }
  }
}