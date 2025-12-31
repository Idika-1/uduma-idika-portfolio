export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          500: "#2563eb", // indigo-500
          600: "#1d4ed8", // indigo-600
          700: "#1e40af", // indigo-700
        },
      },
    },
  },
  plugins: [],
};
