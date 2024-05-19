/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        link: "hsl(var(--link-color), <alpha-value>)",
        "link-deep": "hsl(var(--link-color-deep), <alpha-value>)",
      },
    },
  },
  plugins: [],
};
