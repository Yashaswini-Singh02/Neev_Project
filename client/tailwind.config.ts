import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          crayola: "#607aff",
          "royal-blue": "#2463eb",
          gray: "#abb1bb",
          night: "#121212",
          "sky-blue": "#88caff",
        },
      },
      animation: {
        glow: "glow 2s infinite",
        "dashed-appear": "dashedAppear 0.5s linear forwards",
        "dashed-typing": "dashedTyping 1s steps(2, end) forwards",
        "wave-bars": "wave 1.5s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "scaleY(0.6)" },
          "50%": { transform: "scaleY(1)" },
          "100%": { transform: "scaleY(0.6)" },
        },
        glow: {
          "0%, 100%": {
            boxShadow:
              "5px 5px 20px rgba(0, 123, 255, 0.6), -5px -5px 20px rgba(0, 123, 255, 0.4)",
          },
          "50%": {
            boxShadow:
              "0 0 12px rgba(0, 123, 255, 0.8), 0 0 40px rgba(0, 123, 255, 0.6)",
          },
        },
        dashedAppear: {
          "0%": { width: "0%" },
          "100%": { width: "50%" },
        },
        dashedTyping: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
