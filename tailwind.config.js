/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height:{
        '500': '500px',
        '400':'400px',
        '350':'350px',
        '350':'300px',
        '420':'420px',

      },
      width: {
        '500': '500px',
        '400':'400px',
        '450':'450px',
        '350':'350px',
        '300':'300px',

       },
     
      backgroundColor: {
        'nav-bg': '#393E46',
      },
      fontFamily: {
        clash : ['var(--font-clash)'],
        michroma:['Michroma'],
        oldeenglish: ['Olde English'], 
        Poppins:['Poppins'],
      }
    },
  },
  plugins: [],
}
