import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "50": "#eef9ff",
        "100": "#d9f0ff",
        "200": "#bce6ff",
        "300": "#8ed7ff",
        "400": "#59bfff",
        "500": "#33a1fe",
        "600": "#1c83f4",
        "700": "#156be0",
        "800": "#1856b5",
        "900": "#16417c",
        "950": "#142f57",
      },
    },
  },
  plugins: [],
};
export default config;
