module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all your files are included
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideIn: "slideIn 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
