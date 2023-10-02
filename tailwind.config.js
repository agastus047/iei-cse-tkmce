/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'nav-bg': '#393E46',
      },
      fontFamily: {
        clash : ['Clash'],
        michroma:['Michroma'],
        oldeenglish: ['Olde English'], 
      }
    },
  },
  plugins: [],
}
