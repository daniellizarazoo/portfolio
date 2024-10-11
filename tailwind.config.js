/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          keyframes: {
              wave: {
                  '0%': { transform: 'rotate(0deg)' },
                  '5%': { transform: 'rotate(5deg)' },
                  '10%': { transform: 'rotate(10deg)' },
                  '15%': { transform: 'rotate(3deg)' },
                  '20%': { transform: 'rotate(-5deg)' },
                  '25%': { transform: 'rotate(-3deg)' },
                  '30%': { transform: 'rotate(5deg)' },
                  '35%': { transform: 'rotate(2deg)' },
                  '40%': { transform: 'rotate(-2deg)' },
                  '45%': { transform: 'rotate(0deg)' },
                  '50%': { transform: 'rotate(0deg)' },
                  '55%': { transform: 'rotate(2deg)' },
                  '60%': { transform: 'rotate(5deg)' },
                  '65%': { transform: 'rotate(-3deg)' },
                  '70%': { transform: 'rotate(-5deg)' },
                  '75%': { transform: 'rotate(3deg)' },
                  '80%': { transform: 'rotate(5deg)' },
                  '85%': { transform: 'rotate(2deg)' },
                  '90%': { transform: 'rotate(0deg)' },
                  '95%': { transform: 'rotate(0deg)' },
                  '100%': { transform: 'rotate(0deg)' },
              },
              
          },
          animation: {
              wave: 'wave 10s ease-in-out infinite', // Existing wave animation
          },
      },
  },
  plugins: [],
};
