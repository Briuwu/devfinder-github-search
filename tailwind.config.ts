import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "lightMode-blue": "var(--lightMode-blue)",
        "lightMode-grey": "var(--lightMode-grey)",
        "lightMode-dark-blue": "var(--lightMode-dark-blue)",
        "lightMode-dark-grey": "var(--lightMode-dark-grey)",
        "lightMode-light-grey": "var(--lightMode-light-grey)",
        "lightMode-white": "var(--lightMode-white)",
        "darkMode-blue": "var(--darkMode-blue)",
        "darkMode-white": "var(--darkMode-white)",
        "darkMode-black": "var(--darkMode-black)",
        "darkMode-dark-blue": "var(--darkMode-dark-blue)",
      },
      fontFamily: {
        spaceMono: "var(--font-space-mono)",
      },
    },
  },
  plugins: [],
} satisfies Config;
