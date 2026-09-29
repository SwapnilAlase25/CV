import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Projects: one Markdown file per project in src/content/projects/ */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    /** 'ai' | 'embedded' | 'foundation' — controls colour + grouping */
    category: z.enum(['ai', 'embedded', 'foundation']).default('ai'),
    status: z.enum(['live', 'building', 'archived']).default('live'),
    tags: z.array(z.string()).default([]),
    /** Short highlight numbers, e.g. ["100K+ orders", "3 dashboards"] */
    metrics: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    /** Lower number = shown first */
    order: z.number().default(100),
    draft: z.boolean().default(false),
    /** Show as the big highlighted card at the top of the projects section */
    spotlight: z.boolean().default(false),
    /** Embed the live neural-network playground */
    playground: z.boolean().default(false),
    /** Progress steps shown as a stepper: status = done | active | todo */
    roadmap: z
      .array(z.object({ label: z.string(), status: z.enum(['done', 'active', 'todo']).default('todo') }))
      .default([]),
  }),
});

/** Blog: one Markdown/MDX file per post in src/content/blog/ */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
