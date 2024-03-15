import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1024px",
      xxl: "1336px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: "#01D167",
        primary: "#0C365A",
        secondary: "#325BAF",
        background: "#EDF3FF",
        accentLight: "#EDFFF5",
        accentBorder: "#DDFFEC",
        tabBorder: "#23CEFD",
      },
      fontSize: {
        15: "15px",
      },
      textColor: {
        textBaseColor: "#222222",
      },
    },
  },
  plugins: [],
};
export default config;
