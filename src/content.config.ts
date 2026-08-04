import { defineCollection} from 'astro:content';
import { z } from "astro/zod";
import { glob } from 'astro/loaders';

// 1. Define the Blog collection using the new glob loader
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  })
});

// 2. Define the Projects collection using the new glob loader
const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
     github: z.url().optional(),
    order: z.number().optional().default(0),
  })
});

// 3. Export the collections object to register them
export const collections = {
  blog,
  projects
};


export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        boldonse: ['Boldonse'],
      },
    },
  },
  plugins: [],
};