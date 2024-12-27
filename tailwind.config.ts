import type { Config } from "tailwindcss";
import { slate, blue } from "@radix-ui/colors";
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ...slate,
        primary: blue.blue9,
        "primary-hover": blue.blue10,
      },
      screens: {
        sm: "100px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
export default config;
