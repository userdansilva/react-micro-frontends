/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  prefix: "rp-",
  corePlugins: {
    preflight: process.env.NODE_ENV === "development",
  },
};
