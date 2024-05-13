import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsla(var(--primary))",
        "primary-foreground": "hsla(var(--primary-foreground))",
        background: "hsla(var(--background))",
        foreground: "hsla(var(--foreground))",
        muted: "hsla(var(--muted))",
        "muted-foreground": "hsla(var(--muted-foreground))",
        card: "hsla(var(--card))",
        "card-foreground": "hsla(var(--card-foreground))",
        popover: "hsla(var(--popover))",
        "popover-foreground": "hsla(var(--popover-foreground))",
        border: "hsla(var(--border))",
        input: "hsla(var(--input))",
        secondary: "hsla(var(--secondary))",
        "secondary-foreground": "hsla(var(--secondary-foreground))",
        accent: "hsla(var(--accent))",
        "accent-foreground": "hsla(var(--accent-foreground))",
        destructive: "hsla(var(--destructive))",
        "destructive-foreground": "hsla(var(--destructive-foreground))",
        ring: "hsla(var(--ring))",
        radius: "hsla(var(--radius))",

        "portfolio-green": "hsla(var(--portfolio-green))",
      },
      keyframes: {
        "list-item": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "100" },
        },
      },
      animation: {
        "list-item": "list-item 300ms linear",
      },
    },
  },
  plugins: [],
};
export default config;
