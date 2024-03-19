/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'light-ff': ['font-light', 'system-ui'],
        'medium-ff': ['font-medium', 'Georgia'],
        'satoshi-ff': ['satoshi', 'system-ui'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      }
    },
  },
  plugins: [],
}
