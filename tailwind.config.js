/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {},
  },
  safelist: [
    "bg-gray-200",
    "text-right",
    "bg-blue-100",
    "rounded",
    "mb-2",
    "p-2",
    "hidden",
    // Add any other classes you're using dynamically
  ],
  plugins: [],
};
