/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
   "./src/app/**/*.{js,ts,jsx,tsx}", // Focus on the src/app structure
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include components folder
    "./src/**/*.{html,css}",
    ],
    theme: {
      extend: {
        colors: {
          'primary-color': 'var(--color-primary)',
          'secondary-color': 'var(--color-secondary)',
          'tertiary-color': 'var(--color-tertiary)',
  
        },
      },
    },
    plugins: [],
  }
  