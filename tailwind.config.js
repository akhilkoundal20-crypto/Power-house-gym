/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gymDark: "#050505",
        gymGray: "#111111",
        gymCard: "#181818",
        gymBorder: "#2a2a2a",
        gymAccent: "#e11d48", // Crimson red accent
        gymAccentHover: "#be123c",
        gymTextMuted: "#a3a3a3",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        display: ["Oswald", "sans-serif"],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(5,5,5,0.95) 100%)',
        'card-gradient': 'linear-gradient(to top right, rgba(24,24,24,0.9) 0%, rgba(17,17,17,0.7) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

