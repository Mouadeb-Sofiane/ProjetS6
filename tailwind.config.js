/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {colors: {
      deepBlue: '#010028', // Nom personnalisé pour la couleur
    },}
  },
  plugins: []
}
