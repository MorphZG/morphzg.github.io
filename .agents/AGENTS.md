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

## 1. General Style and Design Guidelines

- Keep the site calm, editorial, and focused on reading. Content should remain the visual priority; avoid decoration that competes with it.
- Use a restrained dark palette with readable foreground and muted text colors. Teal is the primary accent; reserve it for links, categories, focus indicators, and small highlights.
- Maintain a clear type hierarchy: sans-serif for body copy, serif for editorial headings, and monospace for compact metadata and utility labels.
- Use generous, consistent whitespace and a centered, readable content width. Keep navigation straightforward and layouts uncluttered.
- Make every page work at desktop, tablet, and mobile widths. Reflow content rather than allowing horizontal overflow or shrinking text until it is difficult to read.
- Preserve accessible contrast, semantic structure, descriptive links, and visible keyboard focus. Do not rely on color alone to communicate state.
- Keep interactions subtle and consistent. Respect reduced-motion preferences and do not hide essential content or navigation just to fit a narrow screen.
- When changing the visual design, follow the existing site styles and the homepage design proposal unless the task explicitly asks for a different direction.

## 2. Technical CSS Guidelines

### Layout and display

- Use CSS Grid for two-dimensional page structures, such as the hero and post/sidebar columns. Use Flexbox for one-dimensional alignment, navigation, metadata rows, and wrapping groups.
- Prefer `gap` for spacing between flex and grid children. Use margin for an element's relationship to surrounding content and padding for space inside its boundary; reset browser-default heading and paragraph margins where needed.
- Center the main content in a fluid container capped around `918px`, with comfortable side gutters. Use `minmax(0, ...)` for grid tracks and `min-width: 0` where long content could force overflow.
- Keep desktop columns balanced and readable. Collapse multi-column layouts into a single column on small screens; use additional columns for sidebar content only when they remain comfortable to scan.
- Use normal document flow by default. Avoid absolute or fixed positioning for primary layout; reserve it for small decorative details that do not affect reading or interaction.

### Spacing, borders, and surfaces

- Use the spacing and proportions established by the homepage: generous hero spacing, compact metadata, and clear separation between posts and sections.
- Prefer restrained, thin borders using the shared border color to separate content. Avoid bright borders, heavy shadows, and unnecessary card outlines.
- Use the shared panel and shadow tokens only when a surface needs distinct emphasis; keep the default post list editorial and lightweight.
- Use rounded corners sparingly for controls or small labels, not as a default treatment for every section.

### Color and themes

- Use the CSS custom properties defined in `src/styles/global.css` for shared colors, typography, and other design tokens instead of repeating literal values.
- Keep text, muted text, borders, and accents distinguishable in every supported theme. When adding a shared token, keep theme variants in sync where those variants are used.
- Do not use color as the only indication of hover, focus, selection, or status; retain another visible cue such as an underline, outline, or shape.

### Typography

- Use the system sans-serif stack for body copy, Newsreader (or the configured serif token) for headings, and Inconsolata (or the configured monospace token) for metadata and utility text.
- Keep body copy comfortable to read: approximately `15px` with a line-height near `1.6`. Use muted text for secondary descriptions, not for important content that needs high contrast.
- Establish hierarchy with size, weight, and spacing. Use uppercase and letter spacing for short labels only, not paragraphs or long navigation labels.
- Use a restrained heading line-height and modest negative letter spacing for large editorial headings. Use `clamp()` for fluid display sizes when it improves scaling across screen widths.
- Set explicit font-family and weight for headings when browser defaults would break the intended serif/sans hierarchy.

### Responsive behavior and accessibility

- Follow the existing `720px` and `460px` breakpoints when they fit; add a breakpoint only when the layout needs a real change, not to target a specific device.
- Test narrow widths for overflowing headings, metadata, navigation, and long words. Allow metadata to wrap and keep grid children shrinkable.
- Keep essential links and controls available on mobile. If space is limited, reflow them or provide an accessible alternative instead of silently removing functionality.
- Provide visible `:focus-visible` styles with sufficient contrast and offset. Keep hover styles from changing layout or making controls jump.
- Use short transitions for color or other subtle feedback. Include a reduced-motion rule for animated or smoothly scrolling behavior.

### CSS organization and maintainability

- Put shared tokens, resets, and site-wide component styles in `src/styles/global.css`; keep styles local to an Astro component when they are truly specific to that component.
- Reuse the existing class names and markup structure. If a design requires new structure or behavior, update the Astro component intentionally rather than relying on brittle selectors.
- Prefer class-based selectors with low specificity. Avoid styling by element position, long selector chains, or IDs when a component class is appropriate.
- Group responsive overrides with the component rules they affect or in clearly organized media queries. Avoid duplicate declarations and overrides that fight earlier rules.
- Keep CSS changes focused; do not introduce a framework, dependency, or broad restyle for a small visual adjustment.

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
