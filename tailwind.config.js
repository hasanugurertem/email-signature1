/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nureply-blue-full": "rgb(59,130,246)",
        "nureply-blue": "rgba(59,130,246,.5)",
        "nureply-blue-tint": "rgba(59,130,246,.25)",

        valid: "#10B981", // green-500
        invalid: "#EF4444", // red-500

        background: "#F8F9FA", // gray-100
        window: "rgb(255, 255, 255)",

        default: "#343A40", // gray-900
        fade: "#868E96", // gray-700
        highlight: "#CFD4DA", // gray-500
        input: "rgb(0, 0, 0)",

        gray: {
          100: "#F8F9FA",
          200: "#F1F3F5",
          300: "#E8EBED",
          400: "#DEE2E6",
          500: "#CFD4DA",
          600: "#ADB5BD",
          700: "#868E96",
          800: "#495057",
          900: "#343A40",
        },
      },
    },
  },
  plugins: [],
};
