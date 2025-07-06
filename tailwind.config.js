/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            satoshi: ['Satoshi', 'sans-serif'],
          },    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  