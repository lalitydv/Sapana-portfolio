/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Vibrant Blue
        secondary: '#06b6d4', // Cyan
        dark: '#1e40af', // Deep Blue
        accent: '#22d3ee', // Light Cyan
      },
    },
  },
  plugins: [],
}

