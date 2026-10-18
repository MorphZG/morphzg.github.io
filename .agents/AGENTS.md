# AGENTS.md

This repository is an Astro blog site built around content collections and static pages. Use the project’s existing structure and conventions before making changes.

## Project purpose

This project is a personal or publication-style blog. Most work should center around:

- creating or editing blog posts in the content collection
- updating layout and presentation in Astro components
- preserving metadata, SEO, and social tags
- keeping styling and content concerns separated
- updating build configuration only when necessary

## Key files and directories

- [astro.config.mjs](../astro.config.mjs): Astro configuration, MDX integration, sitemap, and font setup.
- [package.json](../package.json): scripts and project dependencies.
- [src/content.config.ts](../src/content.config.ts): content collection schema for blog posts.
- [src/content/blog](../src/content/blog): source Markdown and MDX blog posts.
- [src/components](../src/components): reusable UI components such as header, footer, and metadata head.
- [src/layouts](../src/layouts): page layout wrappers.
- [src/styles](../src/styles): project styles.
- [public](../public): static assets served directly.
- [docs](../docs): project notes and planning docs.

## Content model

Blog content is managed through Astro content collections, not ad hoc files.

- New posts belong in [src/content/blog](../src/content/blog)
- Frontmatter is validated by [src/content.config.ts](../src/content.config.ts)
- Required fields include title, description, and pubDate
- Optional fields like updatedDate and heroImage should be used consistently
- MDX is supported, so posts may include richer components when needed

## Working rules

- Read the relevant files before editing; do not guess based on the folder name alone.
- Prefer small, targeted changes over broad rewrites.
- Keep blog content, layout logic, and styling separate.
- Do not change the site URL, build config, or collection schema unless the task explicitly requires it.
- Preserve metadata and accessibility when updating components or post markup.
- Follow the existing naming and structure conventions already used in the repo.

## Typical tasks

### Add or edit a blog post

1. Create or update a file in [src/content/blog](../src/content/blog)
2. Keep frontmatter valid according to the schema in [src/content.config.ts](../src/content.config.ts)
3. Use clear titles and concise descriptions
4. Ensure Markdown/MDX renders correctly in Astro

### Update layout or navigation

- Edit the relevant component in [src/components](../src/components) or [src/layouts](../src/layouts)
- Keep page structure consistent across posts and sections
- Re-check metadata and header/footer behavior

### Update styling

- Prefer existing style conventions in [src/styles](../src/styles) and component-local styles
- Keep visual changes consistent with the blog look and feel
- Avoid introducing large design changes without a clear task

## Commands

Run commands from the project root:

- npm install: install dependencies
- npm run dev: start the Astro dev server
- npm run build: produce a production build
- npm run preview: preview the built site locally

## Documentation references

For Astro-specific implementation details, consult the official docs:

- <https://docs.astro.build>
- <https://docs.astro.build/en/guides/content-collections/>
- <https://docs.astro.build/en/basics/astro-components/>
- <https://docs.astro.build/en/guides/routing/>
- <https://docs.astro.build/en/guides/styling/>

## Experience and tone

The visual mood should feel mellow, cozy, and easy on the eyes. Use a restrained, harmonious color palette, clear typography, and generous breathing room. Keep navigation straightforward and make reading comfortable on both small and large screens. Avoid visual treatments that compete with the writing.

## Core needs

- Present recent writing clearly and make older posts easy to find.
- Give each post a comfortable, readable page with its title, publication date, and body.
- Support writing and publishing posts with Markdown or MDX.
- Provide clear site navigation and basic information about the author.
- Preserve useful sharing and discovery features such as page metadata and the existing RSS feed.
- Use semantic HTML, visible keyboard focus, and descriptive link text.

## Project foundations

- The site is built with Astro.
- Blog posts live in the `src/content/blog/` content collection and use Markdown or MDX.
- Keep the site lightweight and responsive; use JavaScript and dependencies only when they provide a clear benefit.

## Astro.js documentation reference

Consult these guides before working on related tasks:

- [MCP server for agent: Astro documentation](https://mcp.docs.astro.build/mcp)
- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Summary

This project is intentionally simple and content-focused. Favor consistency, minimal scope, and clear blog-first structure over overengineering.
