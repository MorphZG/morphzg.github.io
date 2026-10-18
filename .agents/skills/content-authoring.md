# Content authoring

Use this when creating or updating blog posts.

## Where to work

- Post files live in [src/content/blog](../../src/content/blog)
- Content schema is defined in [src/content.config.ts](../../src/content.config.ts)

## Rules

- Keep frontmatter valid and consistent with the content collection schema.
- Use clear, readable titles and descriptions.
- Keep the publish date accurate and in a valid date format.
- Prefer concise Markdown that renders well in Astro.
- Ensure MDX is only used when components are intentionally required.

## Validation

- Re-check the frontmatter shape before saving.
- Run the project build if the post changes could affect rendering.
