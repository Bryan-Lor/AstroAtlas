/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        megrim: ["Megrim"],
      },
    },
  },
  plugins: [],
};

module.exports = config;
