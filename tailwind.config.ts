import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "dm-serif-desplay": "var(--font-dm-serif-desplay)", // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font
        roboto: "var(--font-roboto)", // note: the bit that goes inside the var() function is the same variable name we defined in app.tsx
        montserrat: "var(--font-montserrat)", // note: the bit that goes inside the var() function is the same variable name we defined in app.tsx
      },
    },
  },
  plugins: [],
};
export default config
