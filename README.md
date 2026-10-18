# Personal Platform

A personal website and publishing platform built with Astro. A home for technical articles, personal notes, ideas, and useful resources, designed around open web standards, accessible reading, and long-term maintainability.

> This project is more than a traditional blog. It is a personal space for publishing knowledge, documenting what I learn, exploring ideas, and building a lasting collection of content on the web.

## Overview

This repository contains the source code for my personal website and static blog. It uses Astro and Markdown content collections to deliver a fast, content-focused experience without requiring a traditional backend or database.

The project prioritizes simplicity, performance, accessibility, and content ownership. Articles are written in Markdown, validated through a defined content schema, and rendered into static pages during the build process.

The website is developed as an evolving personal platform rather than a conventional portfolio. Its purpose is to support writing, learning, experimentation, and sharing knowledge over time.

## Goals

The project aims to:

- Provide a clean, readable environment for long-form writing and technical articles.
- Keep content portable, version-controlled, and easy to maintain.
- Make articles discoverable through search, categories, tags, and archives.
- Support open web standards such as RSS and sitemap generation.
- Deliver fast, responsive pages with minimal client-side JavaScript.
- Maintain an accessible and consistent experience across devices and themes.
- Keep the architecture understandable and extensible as the website grows.

## Features

The website is designed around the following capabilities. Features marked as planned may not yet be implemented.

- **Static generation:** Pre-rendered pages for fast delivery and straightforward hosting.
- **Markdown publishing:** Write and maintain content using Markdown and structured frontmatter.
- **Content validation:** Define consistent content schemas and catch invalid metadata during development and builds.
- **Article organization:** Group content using categories, tags, and chronological archives.
- **Responsive design:** Provide a usable reading experience across desktop, tablet, and mobile devices.
- **Theme support:** Support light and dark themes, with additional customization where appropriate.
- **RSS feed:** Allow readers to subscribe to published articles through feed readers.
- **Search:** Help visitors discover content across the article archive.
- **SEO foundations:** Generate appropriate metadata, canonical URLs, and a sitemap.
- **Social sharing:** Provide shareable URLs and metadata for link previews.
- **Technical reading tools:** Support features such as syntax-highlighted code, heading anchors, and tables of contents.

The feature list will evolve alongside the project. The repository and its source code are the authoritative references for the current implementation.

## Technology Stack

The project is built around the following technologies:

- [Astro](https://astro.build/) — static-first web framework.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) — application and configuration logic.
- [Markdown](https://www.markdownguide.org/) — primary content format.
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) — structured content management and validation.
- HTML and CSS — semantic markup, layout, responsive styling, and themes.
- Git and GitHub — version control and collaboration.

Additional dependencies may be used for search, syntax highlighting, testing, or other functionality. Consult `package.json` for the actual dependencies and available scripts.

## Project Structure

The exact directory structure may evolve, but the repository follows the general organization below:

```text
.
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   ├── content/
│   │   └── blog/           # Markdown articles
│   ├── layouts/            # Shared page layouts
│   ├── pages/              # Routes and generated pages
│   ├── styles/             # Global styles and theme definitions
│   └── content.config.*    # Content collection configuration
├── astro.config.mjs        # Astro configuration
├── package.json            # Dependencies and scripts
└── README.md
```

This is an illustrative structure. Directory names and configuration files should be adjusted to match the actual repository.

## Getting Started

### Prerequisites

Before getting started, install:

- [Node.js](https://nodejs.org/) — use a version supported by the project's Astro dependencies.
- npm, or another package manager compatible with the repository's lockfile.
- Git.

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal to preview the website.

### Available Commands

The following commands are typical for an Astro project. Confirm the available scripts in `package.json` before using them.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Generate the production site. |
| `npm run preview` | Preview the production build locally. |
| `npm run check` | Run configured Astro diagnostics, if available. |
| `npm run lint` | Run configured linting, if available. |
| `npm run format` | Format files, if a formatting script is configured. |

## Writing and Managing Content

Content is maintained as Markdown files in the configured content directory.

A typical article contains frontmatter followed by the article body:

```md
---
title: "Understanding Static Site Generation"
description: "An introduction to static site generation and its benefits."
pubDate: 2026-10-18
tags:
  - astro
  - web-development
draft: true
---

# Understanding Static Site Generation

Write the article content here using Markdown.

Include headings, code examples, links, images, and other supported Markdown elements.
```

The example illustrates a possible schema. Use the exact field names, types, and conventions defined by the repository's content configuration.

### Content Guidelines

When creating or editing articles:

- Use descriptive titles and concise summaries.
- Follow the established frontmatter schema.
- Use meaningful headings and a logical document structure.
- Add relevant tags rather than creating many near-duplicate tags.
- Prefer relative internal links where appropriate.
- Provide descriptive alternative text for informative images.
- Verify code examples and external links.
- Keep drafts unpublished until they are ready.
- Preserve existing article URLs whenever possible.

Content validation and the production build should be used to catch schema errors before publishing.

## Design Principles

The platform follows a small set of guiding principles.

**Content first.** Design and navigation should help readers find and understand information rather than compete with it.

**Simplicity over unnecessary complexity.** Prefer native browser capabilities, static generation, and small dependencies when they solve the problem well.

**Performance by default.** Keep pages lightweight and avoid shipping JavaScript that is not needed for the experience.

**Accessibility.** Use semantic HTML, keyboard-accessible controls, visible focus indicators, and readable color contrast.

**Content ownership.** Keep writing in portable formats and version control it alongside the source code.

**Long-term maintainability.** Prefer clear conventions and predictable architecture over clever abstractions that are difficult to maintain.

## Contributing

Contributions, suggestions, bug reports, and constructive feedback are welcome.

Although this is a personal project, collaboration can help improve its accessibility, reliability, usability, documentation, and technical quality.

### Ways to Contribute

You can contribute by:

- Reporting bugs or unexpected behavior.
- Suggesting improvements to existing features.
- Improving documentation.
- Identifying accessibility or responsive design issues.
- Improving performance and build reliability.
- Proposing small, well-scoped architectural improvements.
- Fixing reproducible problems.

Please open an issue before starting substantial work so that the proposed change can be discussed.

### Contribution Workflow

1. Check existing issues to avoid duplicating work.
2. Open an issue or discussion for significant changes.
3. Fork the repository and create a focused branch.
4. Implement the change following the existing conventions.
5. Run the relevant checks and build the project.
6. Submit a pull request describing the change, its motivation, and how it was tested.

Keep pull requests focused and avoid combining unrelated changes.

### Pull Request Expectations

A good pull request should:

- Explain the problem being solved.
- Describe the proposed change.
- Include reproduction steps for bug fixes where relevant.
- Include screenshots for significant visual changes.
- Mention any new dependencies and why they are needed.
- Update documentation when behavior or workflows change.
- Pass the available checks and production build.

For substantial architectural changes, discuss the approach before investing time in implementation.

### Scope and Review

This is an independently maintained personal platform, so not every suggestion will necessarily be accepted. Changes should align with the project's goals of simplicity, performance, accessibility, and maintainability.

Please be respectful of the project's existing direction and other contributors' time.

## Development and Quality

Before submitting changes, verify the relevant parts of the application:

```bash
npm run build
```

Run any configured tests, linting, formatting, or validation commands as well.

For UI changes, check the result at different viewport widths and test interactive controls using a keyboard. For content changes, verify frontmatter, internal links, and the generated output.

If a check fails because of an existing issue, include that information in the pull request.

## Deployment

The website is intended to be deployable as a static site on a compatible hosting platform.

A typical deployment workflow is:

1. Install dependencies.
2. Run the production build.
3. Publish the generated output directory using the configured hosting provider.

The production output directory for a standard Astro project is `dist/`.

Actual deployment settings, environment requirements, and build configuration depend on the hosting provider and repository setup.

## Roadmap

Potential areas for future development include:

- [ ] RSS feed and feed autodiscovery.
- [ ] Full-text search across published content.
- [ ] Improved article navigation and tables of contents.
- [ ] Related articles and content series.
- [ ] Enhanced social sharing and link previews.
- [ ] Accessible theme switching and personalization.
- [ ] More comprehensive automated checks.
- [ ] Better internal linking and resource discovery.
- [ ] Continued improvements to performance and accessibility.

This roadmap is illustrative. Completed features should be marked accordingly, and planned work may change as the project develops.

## License

The project's license should be specified in a `LICENSE` file.

If the repository contains both source code and original written content, consider whether they should share the same license. Code and articles can have different licensing requirements.

Until a license is explicitly provided, do not assume that the repository's code or content is available for unrestricted reuse.

## Contact

For questions, bug reports, suggestions, or collaboration proposals, use the repository's GitHub Issues or Discussions where enabled.

For other inquiries, contact:

- **Website:** <your-website-url>
- **GitHub:** <your-github-profile>
- **Email:** <your-public-contact-email>

---

Built as a personal space for writing, learning, and sharing knowledge on the open web.