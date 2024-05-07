import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "mono": ["var(--font-jetbrains-mono)"],
      },
      keyframes: {
        progressGreen: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "calc(30/180*100%)",
          },
        },
        progressRed: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "calc(15/180*100%)",
          },
        },
        progressSterrenkundeGreen: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "0%",
          },
        },
        progressSterrenkundeRed: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "0%",
          },
        },
        progressSohamGreen: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "6.111111%",
          },
        },
        progressSohamRed: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "0%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
