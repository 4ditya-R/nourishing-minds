/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", //Enable dark mode support via class
  theme: {
    extend: {
      colors: {
        light: {
          "off-white": "#F8F9FA", //bgcolor
          "pure-white": "#FFFFFF", //cards
          "deep-charcoal": "#212529", //text.primary
          "subtle-gray": "#6C757D", //text.secondary
          "border-gray": "#E9ECEF", //border-color
          "modern-blue": "#007AFF", //CTA
        },
        "dark-mode": {
          "deep-charcoal": "#121417",
          "grey-card": "#1C1E22",
          "soft-white": "#E4E4E7",
          "Muted gray": "#A1A1AA",
          "border-gray": "#292B2F",
          "modern-blue": "#007AFF",
        },
      },
    },
  },
  plugins: [],
};
