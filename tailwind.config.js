/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lu-blue": "var(--blue)",
        "lu-dark-blue": "var(--dark-blue)",
        "lu-red": "var(--red)",
        "lu-dark": "var(--dark)",
        "lu-gray": "var(--gray)",
        "lu-light-gray": "var(--light-gray)",
      },
      borderRadius: {
        "4xl": "150px",
      },
      height: {
        "600": "600px",
      },
    },
  },
  plugins: [],
};
