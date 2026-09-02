/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFAF6",
          100: "#FAF7F2",
          200: "#F4EFE7",
          300: "#ECE3D6",
          400: "#DDD1C0",
          500: "#C7B8A3",
        },
        forest: {
          DEFAULT: "#2C4A3E",
          dark: "#1E352C",
          light: "#3B6152",
          subtle: "#EAF1ED",
          border: "#C8D9D0",
        },
        ochre: {
          DEFAULT: "#D49B35",
          dark: "#B57E22",
          light: "#E5B35C",
          tint: "#FDF8EE",
          border: "#E9D2A3",
        },
        maroon: {
          DEFAULT: "#852233",
          dark: "#6A1623",
          light: "#A43348",
          tint: "#FAEEF1",
          border: "#E7BDC7",
        },
        lotus: {
          DEFAULT: "#C94A6E",
          dark: "#AB3556",
          light: "#E0688A",
          tint: "#FCF0F4",
        },
        charcoal: {
          DEFAULT: "#23201D",
          soft: "#3A3530",
          muted: "#6E655C",
          light: "#9A9085",
          border: "#E4DCD2",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        hindi: ['"Rozha One"', '"Yatra One"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'craft-sm': '0 2px 8px -2px rgba(35, 32, 29, 0.06), 0 1px 4px -1px rgba(35, 32, 29, 0.04)',
        'craft-md': '0 6px 18px -4px rgba(35, 32, 29, 0.08), 0 3px 8px -2px rgba(35, 32, 29, 0.04)',
        'craft-lg': '0 12px 32px -6px rgba(35, 32, 29, 0.10), 0 6px 12px -3px rgba(35, 32, 29, 0.05)',
        'craft-hover': '0 16px 36px -8px rgba(35, 32, 29, 0.12), 0 8px 16px -4px rgba(35, 32, 29, 0.06)',
      },
      borderRadius: {
        'craft': '8px',
        'craft-lg': '14px',
      }
    },
  },
  plugins: [],
}

