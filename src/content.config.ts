import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// blog post heroImage: 1200px x 630px (ascpect ratio 16:9)
	// blog post thumbnail: 400px x 225px (aspect ratio 16:9)
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			heroImage: z.optional(image()),
			thumbnail: z.optional(image()),
			tags: z.array(z.string()).optional(),
			draft: z.boolean(),
		}),
});



export const collections = { blog };