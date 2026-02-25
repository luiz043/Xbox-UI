// tailwind.config.js
export default {
  theme: {
    extend: {
      backgroundSize: {
        "200%": "200% 200%",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradient: "gradient 8s ease infinite",
      },
    },
  },
}
