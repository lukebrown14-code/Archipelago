---
title: "Geodex"
description:
  "What Does a Country's Health Actually Look Like? I Built a Tool to Find Out"
date: 2026-02-24
category: "Project"
---

Understanding and observing a country’s demographic or economic health is
essential for predicting its future. As Auguste Comte famously stated,
“Demography is destiny”. This is why I created Geodex. I wanted a tool to better
understand a country’s destiny and make informed investment decisions in its
markets. The problem was I couldn’t find a tool that allowed me to view this
data in one place and in an easily understandable format. I needed a way to see
a country’s full story in one place.

Geodex is a country intelligence dashboard. You can search for a nation to view
its demographics and economic profile. Compare two countries side-by-side and
assess a country’s overall health using an A-F grading system for both
demographics and the economy.

The module on demographics covered population pyramids, median age trends,
dependency ratios, fertility and life expectancy (projected for 2010–2040). For
the economic module, I chose GDP, inflation, unemployment, public debt and the
current account balance. I selected these because I believed they provided the
most comprehensive overall picture of a country’s health.

## The Tech Stack — Honest Reflections

For my Geodex project, I used Next.js (App Router), TypeScript, Supabase,
Recharts, Shadcn/UI, Tailwind CSS, and Bun. The main reason I chose these was to
simply learn more about these technologies and use a tech stack that is very
heavily used in industry at the moment.

Coming from a heavy JavaScript and React.js background, I found the learning
curve for Next.js and TypeScript quite manageable. I appreciated the additional
features offered by Next.js compared to React.js, such as routing, server-side
rendering and API routes. While I didn’t get to explore all the features due to
the project’s requirements, I believe Next.js was slightly overkill and perhaps
overengineered for this project. However, it was still enjoyable to delve deep
into it. TypeScript was also a good experience, providing more practice writing
code and familiarising myself with its type system.

Using Supabase was a positive experience. I found it easy to move datasets from
CSV format to a working database. The only issue I encountered was importing
large datasets, which required creating Python scripts to clean the data to fit
within Supabase’s size limit. While this may be a Supabase limitation, I don’t
think it’s a significant one. Supabase seems like a great quick and easy
solution for smaller projects. I can’t comment on its scalability as the
database grows or the user base expands, so I’d be interested to see how far you
can push it.

For CSS, I always find TailwindCSS a pleasure to work with and it’s my go-to
when using CSS. As for component libraries, I enjoyed Shadcn/UI for its ease of
use and clean aesthetic. However, I think its style might become dated in the
future and its Shadcn/UI has a very specific look that could become boring as
more sites adopt it. Recharts was fine but I have nothing particularly positive
or negative to say about it. Next time I need a charting library, I’d try D3.js
because its graphs seem more customisable and flexible.

The last part of my tech stack was Bun, which I much preferred over Node. It’s
simply much simpler to use. Its toolchain is so much simpler, eliminating the
need for NVM (Node version manager) and npm (Node package manager). Bun also
doesn’t require an external testing framework like Vitest to write tests.
Overall, the developer experience is much nicer with Bun, and I’ve fully moved
over to it for all my other projects as well.

## Key Learnings — What Building This Taught You

Building these projects has taught me a lot about various aspects and fields.
The most significant learning was using AI extensively to create this app.
During the process of getting it to version 1, I used Claude Code. I wanted to
explore AI’s capabilities and see if it would replace my job. The biggest
takeaway was that while it’s impressive to start, it introduces technical debt
into your project. This debt accumulates and grows as the project expands until
near the end of completing version 1, when the AI began to falter. It couldn’t
make basic changes and required an excessive number of tokens to arrive at
incorrect answers. I have concerns about the amount of technical debt it
introduced, which will make version 2 a significant undertaking just to fix
issues and add new features. This isn’t to say AI has no place in software
engineering, but I believe it needs to be used more judiciously. Personally, I
enjoy using AI for tasks I find tedious, like creating components and general
CSS work. It was very helpful in generating the graphs in the dashboard, but I
think it struggles with writing logic code. Going forward, I’ll use AI as a
sniper rather than a shotgun. I’ll create isolated components (using Storybook
for testing) or layouts. All logic-related code will be my primary focus, and
I’ll use AI to answer any questions I have. If I find the right balance, I can
achieve faster code shipping and more frequent releases due to reduced technical
debt.

The other major learning was data modelling with wrangling two heterogeneous
datasets (UN + World Bank) into a single coherent schema, with issues with
country codes, coverage gaps (e.g. Western Sahara), and normalising formats.
Honestly, some of those issues aren’t solved; like coverage gaps, I just show no
data when a user searches for them. I think if I were to recreate the DB, I
would join them in a more cohesive manner so it’s a more unified dataset. I
think this would have come if I had spent more planning and collecting all the
datasets first before I began creating the backend.

## What's Next — The Roadmap

For version 2, here are some ideas I’d like to create:

- Scoreboard of best and worst countries by demographic and economic health
- Additional data dimensions: crime, freedom indices, energy production and cost
- CSV export for the data geeks
- Dynamic date ranges (1y, 5y, 10y, all)

If you’re interested in looking through the code or checking out the site, the
links can be found below.

[Geodex](https://geodex.dev)
[GitHub](https://github.com/lukebrown14-code/Geodex)
