import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFF",
      },
      fontFamily: {
        mono: ["Courier", "monospace"],
      },
      tracking: {
        sm: "10em",
        wide: "0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
