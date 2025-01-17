// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: { port: 3000 },
    site: "https://morphzg.github.io",
    output: "static",
    outDir: "./dist",
    build: {
        assets: "astro"
    }
    
});
