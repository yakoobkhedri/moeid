/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'pinkgradient':'linear-gradient(360deg, #FFCEC7 0%, rgba(217, 217, 217, 0) 43.04%, rgba(255, 255, 255, 0) 68.04%)',
        'pinkgradient2':'background: linear-gradient(360deg, #FFCEC7 0%, rgba(217, 217, 217, 0) 68.04%, rgba(255, 255, 255, 0) 68.04%)'
      },
      colors: {
        'primary':'#8D50EF',
        'secondary':'#1E2D48',
        'gray':'#F1F1F1',
        'orange':'#F76B16'
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      lineHeight:{
       
      },
      fontFamily: {
        rokh: "rokh",
        stretch: "stretch",
        yekanBakhRegular: "yekanBakh-Regular",
        Astonia:"Astonia"
      },
      boxShadow: {
        'next':'box-shadow: -2px 0px 24px 0px #0000001A',
      },
      maxWidth:{
        'content':'1256px',
        'content2':'1391px',
      },
    }
},
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

