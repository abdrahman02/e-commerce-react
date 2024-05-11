/** @type {import('tailwindcss').Config} */
import daisyUi from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSouceOne: ["Open Sauce One", "sans-serif"],
      },
    },
  },
  plugins: [daisyUi],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0eb596",
          "primary-focus": "#0c8871",
          "primary-content": "#ffffff",

          secondary: "#0E41B5",
          "secondary-focus": "#0b3189",
          "secondary-content": "#ffffff",

          accent: "#16b50e",
          "accent-focus": "#10850a",
          "accent-content": "#ffffff",

          neutral: "#3b424e",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#ced3d9",
          "base-content": "#1e2734",

          info: "#1c92f2",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
};
