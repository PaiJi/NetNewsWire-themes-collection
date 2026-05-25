import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://paiji.github.io",
  base: "/NetNewsWire-themes-collection",

  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
