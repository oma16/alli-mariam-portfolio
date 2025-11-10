/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      gray:{
        100:"hsl(235, 19%, 35%)",
        200:"hsl(234, 39%, 85%)",
        300:"hsl(235, 21%, 11%)",
        400:"hsl(236, 33%, 92%)",
      },
      green:{
        100:"#16F8B6",
        600:"#16a34a",
      },
      white:"#ffffff",
      purple:{
        100:"#7e22ce",
      },
      red:{
        100:"#FF0000",
      }
      
    }
  },
  plugins: [],
}

