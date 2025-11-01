// tailwind.config.cjs
// ---------------------------------------------
// Tailwind CSS Configuration
// Enables dark mode via class strategy and defines
// the custom color palette (brand & muted) used
// throughout the MZ WebApp Lite template.
// ---------------------------------------------

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode toggling with a class
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css,scss}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand palette (blue-based)
        brand: {
          DEFAULT: "#3B82F6",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3B82F6",
          600: "#2563eb",
          700: "#1e40af",
          800: "#1e3a8a",
          900: "#172554",
        },
        // Neutral muted tones for backgrounds and borders
        muted: {
          100: "#f5f7fb",
          200: "#eef2f6",
          300: "#e5e8ee",
          400: "#cfd6e0",
          500: "#98a0b0",
        },
      },
    },
  },
  plugins: [],
};
