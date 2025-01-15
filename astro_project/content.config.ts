import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
	// Load Markdown and MDX files in the `src/content/notes/` directory.
	loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		author: z.string().optional().nullable(),
		pubDate: z.coerce.date().optional().nullable(),
		heroImage: z.string().optional().nullable(),
		source: z.string().optional().nullable(),
		status: z.enum(["draft", "useful", "detailed", "master"]).optional().nullable(),
		tags: z.array(z.string()).nullable(),
		title: z.string(),
		type: z.string().nullable(),
		URL: z.string().optional().nullable(),

	}),
});

export const collections = { notes };