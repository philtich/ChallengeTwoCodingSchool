/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    container: {

      center: true,

      screens: {
        xs: '300px',
        sm: '570px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    aspectRatio: {
      '4/3': '4 / 3',
    },
  plugins: [],
}
}
