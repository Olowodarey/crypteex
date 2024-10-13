/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary))',
      white: 'rgb(var(--color-white))',
      fadedprimary: 'rgb(var(--faded-primary))',
      black: 'rgb(var(--color-black))',
      secondary: 'rgb(var(--color-secondary))',
      bblack : 'rgb(var( --color-black))',
      green : 'rgb(var( --color-green))',
      red :   'rgb(var( --color-red))',
      amber :   'rgb(var( --color-amber))'
      
    },

    extend: {},
  },
  plugins: [],
}

