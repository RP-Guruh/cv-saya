/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{gjs,gts,hbs,html,js,ts}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
