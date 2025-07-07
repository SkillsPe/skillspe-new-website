/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
            sora: ['Sora', 'sans-serif'],
            satoshi: ['Satoshi', 'sans-serif'],
          },
      },
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),

    ],
  }
  