/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins', 'sans-serif']
      },
      maxWidth:{
        base:"81.875rem"
      },
      fontSize:{
        8:"0.5rem",
        10:"0.625rem"
      },
      colors:{
        brand:{
          black:'#393939',
          blue:'#2B5DDF',
          gray:{
            100:"#E8E8E8",
            200:"#aaaaaa"
          }
        },
      },
      backgroundImage:{
        linearG:"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)"
      },

      boxShadow:{
        base:'0px 1.7705905437469482px 2.655885696411133px 0px #0000000F;'
      },
      spacing:{
        "xl":"6.5rem",
        'xs':"4.5rem",
      }
    },
  },
  plugins: [],
}
