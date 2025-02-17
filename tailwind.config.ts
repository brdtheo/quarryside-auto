import containerQueriesPlugin from "@tailwindcss/container-queries";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#312011",
        primarydark: "#eeddce",
        secondary: "#b7a995",
        secondarydark: "#6a5c48",
        background: "#F8F9FD",
        backgrounddark: "#020308",
        black: "#020308",
        blacksecondary: "hsla(0,0%,100%,0.14)",
        divider: "#E1E1E1",
        dividerdark: "#1e1e1e",
        yellow: "#FFE714",
        red: "#CF061F",
        "ad-background": "#CDCCCC",
        "ad-text": "#00AECD",
      },
      borderRadius: { DEFAULT: "4px" },
    },
  },
  darkMode: "class",
  plugins: [containerQueriesPlugin],
} satisfies Config;
