// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    server: { port: 3000 },
    site: "https://morphzg.github.io",
    base: "/",
    integrations: [mdx(), sitemap(), react()],
    fonts: [
        {
            provider: fontProviders.google(),
            name: "Inconsolata",
            cssVariable: "--mono-space",
        },
        {
            provider: fontProviders.google(),
            name: "Merriweather",
            cssVariable: "--serif",
        },
    ],
});
