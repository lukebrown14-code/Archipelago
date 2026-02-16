import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date().optional(),
    category: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog };
