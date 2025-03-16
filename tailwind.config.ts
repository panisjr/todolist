import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"], // Apply your custom font
      },
    },
  },
  plugins: [require("daisyui")], // Keep this as is, unless you switch to ESM plugins
};

export default config;
