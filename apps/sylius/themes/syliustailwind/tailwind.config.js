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
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#22B99A',
          secondary: '#1E2E3E',
          accent: '#249D81',
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },
      },
    ],
  },
};
