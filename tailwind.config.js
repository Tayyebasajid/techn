/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#EF233C',
        'custom-white': '#FFFFFF',
        'custom-gray':'#B6B6B6' ,
        'custom-blue': '#222432',
        'custom-black': '#3A3C49',
        'custom-dark':'#3D3E4B' ,
        'custom-darkg':'#8D99AE',
        'custom-darkb' : '#3B3F4F',
        'custom-lgray' : '#E4E4E4',
        'custom-jetb' : '#4B515A'
      },
      fontFamily: {
        'font-roboto' : ['Roboto', 'sans-serif'] ,
        'font-saira' : ['Saira', 'sans-serif'] ,
        'font-inter' : ['Inter', 'sans-serif'] ,
        'font-poppins' : ['Poppins' , 'sans-serif']
        
      }
    
    },
  },
  plugins: [],
}

