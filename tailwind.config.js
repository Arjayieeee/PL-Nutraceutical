/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#32a852',
        secondary: '#0F7A81',
        dark: '#0a0a0a',
        lightdark: '#54595F'
      }
    },
    fontFamily: {
      'livvic': ['Livvic', 'sans-serif'],
    },
  },
  plugins: [],
}
