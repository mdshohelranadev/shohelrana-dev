import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alt: "#F8F8F8",
        body: "#4B5563",
        muted: "#9CA3AF",
        line: "rgba(0,0,0,0.08)",
        lineHover: "rgba(0,0,0,0.3)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "spin-slow": { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        "spin-slow": "spin-slow 24s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
