import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    darkTheme: "light",
    // base: true,
    // styled: true,
    // utils: true,
    // prefix: "",
    // logs: true,
    // themeRoot: ":root",
  },
};
