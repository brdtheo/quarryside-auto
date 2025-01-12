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
        black: "#050505",
        grey: "#EBEBEB",
        "grey-secondary": "#9B9B9B",
        brown: "#2F2012",
        "brown-secondary": "#584c41",
        background: "#F8F9FD",
        divider: "#E1E1E1",
        yellow: "#FFE714",
        red: "#CF061F",
      },
      borderRadius: { DEFAULT: "4px" },
    },
  },
  plugins: [],
} satisfies Config;
