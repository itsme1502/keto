/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        customLight: '#98EECC',
        customDark: '#0EA293',
      },
    },
  },
  plugins: [],
};
