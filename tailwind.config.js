/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{},
      fontFamily:{},
      
    },
    screens:{
      xs:'480px', 
      ss: '620px',
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1440px',
      xxl: '1920px',
    }
  },
  plugins: [],
}