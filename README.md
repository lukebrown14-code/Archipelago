# Archipelago

A minimal blog built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [daisyUI](https://daisyui.com).

## Getting Started

```sh
npm install
npm run dev
```

Open [localhost:4321](http://localhost:4321) to view the site.

## Commands

| Command             | Description                          |
| :------------------ | :----------------------------------- |
| `npm run dev`       | Start the development server         |
| `npm run build`     | Build the production site to `dist/` |
| `npm run preview`   | Preview the production build locally |

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
