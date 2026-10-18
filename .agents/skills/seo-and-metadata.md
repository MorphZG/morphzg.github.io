# SEO and metadata

Use this when updating page metadata, social tags, or site-level information.

## Where to work

- Site head metadata: [src/components/BaseHead.astro](../../src/components/BaseHead.astro)
- Astro config: [astro.config.mjs](../../astro.config.mjs)
- Content frontmatter: [src/content.config.ts](../../src/content.config.ts)

## Rules

- Preserve title, description, canonical metadata, and social tags when editing page head data.
- Keep content metadata consistent with the actual post content.
- Avoid changing the site URL or SEO config unless the task explicitly calls for it.
- Prefer existing metadata conventions over creating new patterns.

## Validation

- Check that metadata values remain coherent and consistent across pages.
- For larger metadata changes, validate with a build to ensure the site still renders correctly.
