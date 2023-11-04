/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#16161a",
        headline: "#fffffe",
        paragraph: "#94a1b2",
        main: "#fffffe",
        primary: "#7f5af0",
        secondary: "#72757e",
        tertiary: "#2cb67d",
        stroke: "#010101",
      },
    },
  },
  plugins: [],
};
