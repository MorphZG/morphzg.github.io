import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    // Example: Add React + Tailwind support to Astro
    integrations: [react(), tailwind()],
    site: "http://zoran-topic.from.hr"
});
