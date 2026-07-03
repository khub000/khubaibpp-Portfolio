import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#09090B",
        panel: "#111827",
        neon: "#A855F7",
        violet: "#7C3AED",
        frost: "#F8FAFC",
        muted: "#94A3B8",
        cyan: "#22D3EE",
        ember: "#F97316"
      },
      boxShadow: {
        glow: "0 0 32px rgba(168, 85, 247, 0.32)",
        cyan: "0 0 24px rgba(34, 211, 238, 0.24)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
