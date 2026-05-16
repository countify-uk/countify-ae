/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx}",
    "./src/context/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          'primary-color': 'var(--color-primary)',
          'secondary-color': 'var(--color-secondary)',
          'tertiary-color': 'var(--color-tertiary)',
  
        },
        keyframes: {
          "hero-zoom": {
            "0%": { transform: "scale(1)" },
            "100%": { transform: "scale(1.12)" },
          },
          "scroll-line": {
            "0%": { transform: "translateY(-100%)" },
            "100%": { transform: "translateY(220%)" },
          },
        },
        animation: {
          "hero-zoom": "hero-zoom 12s ease-in-out infinite alternate",
          "scroll-line": "scroll-line 1.8s ease-in-out infinite",
        },
      },
    },
    plugins: [],
  }
  
