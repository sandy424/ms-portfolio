import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        card: "#F1F0EC",
        border: "#E6E4DD",
        muted: "#6B6E76",
        accentBlue: "#2f42ed",
        accentOrange: "#e83bae",
      },
    },
  },
};
export default config;