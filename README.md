# Archipelago

A personal blog built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [daisyUI](https://daisyui.com).

## Design

Archipelago follows a **brutalist newspaper aesthetic** — inspired by print editorial design rather than typical web conventions.

**Typography:** The site pairs [Anton](https://fonts.google.com/specimen/Anton) for headlines with [Space Mono](https://fonts.google.com/specimen/Space+Mono) for body text and UI elements. Headings are set in uppercase with wide letter-spacing, echoing the masthead style of broadsheet newspapers.

**Colour:** A restrained palette of warm parchment, dark ink, and a single accent colour (burnt orange / rust). Dark mode inverts the relationship while keeping the same warmth.

**Article prose:** Blog posts use newspaper-inspired typographic details — drop caps on the opening paragraph, pull-quote blockquotes with horizontal rules instead of left borders, sharp-cornered images with thin borders instead of rounded shadows, and small centered ornamental `<hr>` dividers between sections.

**Layout:** Content is constrained to a narrow readable column. The index page uses a sidebar-plus-article-list structure reminiscent of a newspaper's section layout, with the lead article given a larger headline.

**Overall feel:** No gradients, no rounded corners, no soft shadows. Sharp edges, high contrast, and typographic hierarchy do the heavy lifting.

## Getting Started

```sh
bun install
bun run dev
```

Open [localhost:4321](http://localhost:4321) to view the site.

## Commands

| Command             | Description                          |
| :------------------ | :----------------------------------- |
| `bun run dev`       | Start the development server         |
| `bun run build`     | Build the production site to `dist/` |
| `bun run preview`   | Preview the production build locally |

## Adding a Blog Post

Create a new `.md` file in `src/content/blog/` with the following frontmatter:

```md
---
title: "Post Title"
description: "A short description"
date: 2026-01-01
category: "Category Name"
---

Your content here...
```

The `date` and `category` fields are optional.

## Project Structure

```
src/
├── content/blog/    # Markdown blog posts
├── layouts/         # BaseLayout, BlogPostLayout
├── pages/           # File-based routing (home, about, blog)
├── stores/          # Nanostores for state management
└── styles/          # Global CSS (Tailwind + daisyUI)
```
