/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  content: [
    path.join(__dirname, './assets/**/*.js'),
    path.join(__dirname, './templates/**/*.html.twig'),
  ],
  theme: {
    extend: {
      margin: {
        auto: 'auto',
      },
    },
  },
  plugins: [require('daisyui')],
};
