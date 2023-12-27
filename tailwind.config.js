/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        darkbg: "#18181b",
        redbg: "#b91c1c"
      },
    },
  },
  plugins: [],
};
