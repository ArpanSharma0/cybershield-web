/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 4%)",
        surface: "hsl(0 0% 8%)",
        foreground: "hsl(0 0% 96%)",
        muted: "hsl(0 0% 53%)",
        stroke: "hsl(0 0% 12%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-instrument)", "serif"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
      },
    },
  },
  plugins: [],
};
