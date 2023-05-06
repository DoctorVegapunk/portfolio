/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      transitionDuration: {
        '400': '400ms',
      }
    }
  },
  plugins: [],
}
