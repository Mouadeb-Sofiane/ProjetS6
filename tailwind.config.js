/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      maPolice: ['MaPolice', 'sans-serif'],
    },
    extend: {colors: {
      deepBlue: '#010028', // Nom personnalisé pour la couleur
      gris: '#1C1F26',
      fond: '#0D1117',
      fonds: '#0A0F1F',
      textlogo1: '#A8F12F',
      textlogo2: '#126778',
      textlogo3: '#012144',
    },}
  },
  plugins: []
}
