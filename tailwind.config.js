/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        heartVibrating: {
          '0%': { transform: 'rotate(-45deg) scale(1.07)' },
          '99%': { transform: 'rotate(-45deg) scale(1.0)' },
          '100%': { transform: 'rotate(-45deg) scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
};
