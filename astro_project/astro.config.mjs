//https://docs.astro.build/en/reference/configuration-reference/

import { defineConfig } from 'astro/config';

export default defineConfig({
    server: { port: 3000 },
    site: "https://morphzg.github.io",
    output: "static",
    outDir: "./dist",
    build: {
        assets: "astro"
    }
    
});
