/** @type {import('tailwindcss').Config} */

/* eslint-env node */

module.exports = {

  // Allows me to toggle darkmode styles by adding dark class to the body
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{vue, js, ts}"
  ],
  theme: {
    colors: {
      limegreen: 'hsl(163, 72%, 41%)',
      brightred: 'hsl(356, 69%, 56%)',
      facebook: 'hsl(208, 92%, 53%)',
      twitter: 'hsl(203, 89%, 53%)',
      instagram1: 'hsl(37, 97%, 70%)',
      instagram2: 'hsl(329, 97%, 39%)',
      youtube: 'hsl(348, 97%, 39%)',
      togglegrad1: 'hsl(210, 78%, 56%)',
      togglegrad2: 'hsl(146, 68%, 55%)',
      togglelight: 'hsl(230, 22%, 74%)',
      white: 'hsl(0, 0%, 100%)',
      lightTopBg: 'hsl(225, 100%, 98%)',
      lightCardBg: 'hsl(227, 47%, 96%)',
      darkGrayBlue: 'hsl(228, 12%, 44%)',
      veryDarkBlue: 'hsl(230, 17%, 14%)',
      darkbg: 'hsl(230, 17%, 14%)',
      darkTopBg: 'hsl(232, 19%, 15%)',
      darkCardBg: 'hsl(228, 28%, 20%)',
      darkText: 'hsl(228, 34%, 66%)',
    },
    letterSpacing: {
      widest: '5px',
    },
    extend: {},
  },
  plugins: [],
}

