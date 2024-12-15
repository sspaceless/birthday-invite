import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      animation: {
        float: "float 3s ease-in-out infinite",
        rotate: "rotate 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
