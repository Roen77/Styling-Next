import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "990px",
      // => @media (min-width: 990px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    container: {
      center: true,
      padding: "1.875rem",
    },
    extend: {
      padding: {
        "30": "1.875rem",
      },
      colors: {
        "primary-black": "#333",
        "dark-gray": "#222",
        "button-black": "#1a1b1f",
      },
      letterSpacing: {
        wide: "0.0625rem",
        widest: "0.125em",
      },
    },
  },
  plugins: [],
};
export default config;
