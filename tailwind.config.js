/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'highlight': 'rgb(110, 6, 242)',
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        enlarge: {
          '100%': {
            width: '50%',
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease 300ms",
        slidein2:"slidein 2s ease 300ms",
        slidein3:"slidein 3s ease 300ms",
        slidein4:"slidein 4s ease 300ms",
        slidein5:"slidein 5s ease 300ms",
        enlarge:"enlarge 2s ease"
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.mask-image': {
          maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%, rgba(0, 0, 0, 0) 100%)',
          overflow: 'hidden',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
