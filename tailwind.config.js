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
      },
      width: {
        '500': '500px',
        '400':'400px',
        '450':'450px',
        '350':'350px',

       },
      fontFamily:{
        Michroma:['Michroma'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        'xs':'390px',
        
        'xxs':'360px',
      }
    },
  },
  plugins: [],
}
