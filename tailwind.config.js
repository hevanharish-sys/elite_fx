/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matte-black': '#050505',
        'gold-metallic': '#F5B942',
        'dark-amber': '#8B5A2B',
        'card-bg': 'rgba(255, 255, 255, 0.03)',
      },
      fontFamily: {
        'heading': ['Outfit', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FAD961 0%, #F5B942 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(245, 185, 66, 0.2)',
      }
    },
  },
  plugins: [],
}
