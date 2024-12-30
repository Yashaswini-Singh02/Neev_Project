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
    },
  },
  plugins: [],
} satisfies Config;
