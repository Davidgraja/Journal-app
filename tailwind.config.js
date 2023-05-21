/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins :['Poppins', 'sans-serif']
      },
      gridTemplateColumns: {
        'personalized' : 'repeat(3, minmax(80px , 300px))'
      },

      gridAutoColumns: {
        'prueba' : '200px' 
      }
    },
  },
  plugins: [],
}

