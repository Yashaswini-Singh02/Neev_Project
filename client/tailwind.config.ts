import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
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
          "dark-blue": "#2348b0",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        wavePulse: {
          "0%": { transform: "scale(0.9)", opacity: "0.8" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        wavePulse2: {
          "0%": { transform: "scale(1.1)", opacity: "0.4" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },

        wave: {
          "0%": {
            transform: "scaleY(0.6)",
          },
          "50%": {
            transform: "scaleY(1)",
          },
          "100%": {
            transform: "scaleY(0.6)",
          },
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
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        coil: {
          "0%": { transform: "scale(1) rotate(0deg)", opacity: "0.5" },
          "50%": { transform: "scale(1.1) rotate(180deg)", opacity: "0.8" },
          "100%": { transform: "scale(1) rotate(360deg)", opacity: "0.5" },
        },
        waveMove: {
          "0%": { transform: "translateX(-50%)", opacity: "0" },
          "50%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(50%)", opacity: "0" },
        },
        waveMoveReverse: {
          "0%": { transform: "translateX(50%)", opacity: "0" },
          "50%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-50%)", opacity: "0" },
        },
      },
      animation: {
        glow: "glow 2s infinite",
        "dashed-appear": "dashedAppear 0.5s ease-out forwards",
        "wave-bars": "wave 1s ease-in-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        wavePulse: "wavePulse 2s infinite ease-out",
        wavePulse2: "wavePulse2 2s infinite ease-out",
        coil: "coil 2s infinite ease-in-out",
        "wave-move": "waveMove 3s infinite ease-in-out",
        "wave-move-reverse": "waveMoveReverse 3s infinite ease-in-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
