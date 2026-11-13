// @ts-check

import { defineConfig, fontProviders } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import { remarkReadingTime } from "./src/utility/remark-reading-time.mjs";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
    server: { port: 3000 },
    site: "https://morphzg.github.io",
    base: "/",
    integrations: [mdx(), sitemap(), react(), pagefind()],
    markdown: {
        processor: unified({
            remarkPlugins: [remarkReadingTime],
        })
    },
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
