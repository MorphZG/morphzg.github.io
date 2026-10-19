# Personal Website & Blog

This repository contains the source code for my personal website and blog. It's a place to share knowledge and keep my ideas in one place.

The site is built as a static website, with a markdown content managed through Astro content collections. The goal is to keep things fast, simple, and easy to maintain without unnecessary complexity. I will look to add a backend and a database but there is also a lot more i should do on a frontend before i take that venture.

Live at: [morphzg.github.io](https://morphzg.github.io)

## What's inside?

- Personal website — a home for my writing, interests, and projects.
- Markdown-based blog — articles live alongside the source code, making them easy to write, edit, and version.
- Astro content collections — structured content with a consistent format.
- Static generation — pages are generated at build time, keeping the site lightweight.
- GitHub Pages deployment — the website is deployed through a GitHub Actions workflow.

I'm building this as a personal platform rather than just a portfolio. It's an ongoing project that can grow as I learn new things and find better ways to organize and share content.

## Tech stack

- [Astro](https://astro.build/) — static site generation and component-based layouts
- JavaScript — application logic and development
- CSS — styling and layout
- Markdown and mdx — blog content
- GitHub Pages and GitHub Actions — hosting and deployment

## Getting started

Want to run the site locally or explore the code? Here's how.

### Prerequisites

- [Node.js](https://nodejs.org/) — a version compatible with the project's dependencies
- npm, or the package manager used by the repository
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/MorphZG/morphzg.github.io.git
```

Move into the project directory:

```bash
cd morphzg.github.io
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Astro will print the local development URL in your terminal, usually `http://localhost:3000`. You can change the port in `astro.config.mjs`.

### Build for production

To generate the production version of the site:

```bash
npm run build
```

To preview the generated site locally:

```bash
npm run preview
```

## Writing and managing content

Blog posts are written in Markdown and managed through Astro content collections.

This keeps writing separate from presentation and makes it easy to track changes with Git. It also means I can focus on the content without having to build a complicated publishing system.

To add or edit a post, check the existing content files and follow their frontmatter format and directory structure.

## Deployment

The site is hosted on GitHub Pages. Deployment is handled through GitHub Actions, which builds the Astro project and publishes the generated website.

For more information about the deployment setup, check the workflow files in `.github/workflows/`.

## Why this project?

I like building things for the web, experimenting with different technologies, and learning by doing. This website brings those interests together in one practical project.

It's also a space to publish things that might be useful to someone else. Not every idea needs to become a big project, and not every article needs to be perfect before it goes online.

The site will evolve over time as I add content, improve the experience, and experiment with new ideas.

## Feedback

Found something interesting, spotted a bug, or have an idea for an improvement?
Feel free to open an issue or start a discussion. Feedback and suggestions are welcome.
