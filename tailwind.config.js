// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'translate3d(0, 0, 0) scale(1) rotate(0deg)' },
          '25%': { transform: 'translate3d(10px, -14px, 0) scale(1.06) rotate(4deg)' },
          '50%': { transform: 'translate3d(-10px, -24px, 0) scale(0.94) rotate(-3deg)' },
          '75%': { transform: 'translate3d(-18px, -8px, 0) scale(1.02) rotate(2deg)' },
          '100%': { transform: 'translate3d(0, 0, 0) scale(1) rotate(0deg)' },
        },
      },
      animation: {
        blob: 'blob 20s cubic-bezier(0.42, 0.05, 0.2, 0.98) infinite',
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
      },
    },
  },
  plugins: [],
};
